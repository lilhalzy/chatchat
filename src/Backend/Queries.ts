import { doc, getDoc, serverTimestamp, setDoc } from '@firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { NavigateFunction } from 'react-router';
import { toast } from 'react-toastify';
import { AppDispatch } from '../Redux/store';
import { defaultUser, setUser } from '../Redux/userSlice';
import { authDataType, setLoadingType, userType } from '../Types';
import catchErr from '../utils/catchErr';
import { toastErr, toastWarn } from '../utils/toast';
import { auth, db } from './Firebase.config';

const usersCollection = 'users';
const tasksCollection = 'tasks';
const taskListCollection = 'taskList';
const chatsCollection = 'chats';
const messagesCollection = 'messages';

export const signUp = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void,
  goTo: NavigateFunction,
  dispatch: AppDispatch
) => {
  const { email, password, confirmPassword } = data;
  // loading TRUE
  setLoading(true);

  if (email && password) {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          // TODO: create user image
          const userInfo = await addUserToCollection(
            user.uid,
            user.email,
            user.email || '',
            user.email?.split('@')[0] || '',
            'imgLink'
          );

          // set user info in store
          dispatch(setUser(userInfo));

          console.log(user);
          setLoading(false);
          reset();
          goTo('/dashboard');
        })
        .catch((err) => {
          catchErr(err);
          setLoading(false);
        });
    } else toastWarn(`Password must match`, setLoading);
  } else toastErr(`Don't leave it blank, silly`, setLoading);
};

export const signIn = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void,
  goTo: NavigateFunction,
  dispatch: AppDispatch
) => {
  const { email, password } = data; // destructure
  // loading TRUE
  setLoading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then(async ({ user }) => {
      const userInfo = await getUserInfo(user.uid);

      // set user in store
      dispatch(setUser(userInfo));

      console.log(user);
      setLoading(false);
      reset();
      goTo('/dashboard');
    })
    .catch((err) => {
      catchErr(err);
      setLoading(false);
    });
};

const addUserToCollection = async (
  id: string,
  email: string,
  username: string,
  img: string
) => {
  // create user with userID
  await setDoc(doc(db, id, usersCollection), {
    isOnline: true,
    img,
    username,
    email,
    creationTime: serverTimestamp,
    lastSeen: serverTimestamp,
    bio: `My name is ${username}. This is my lazy uhh bio`,
  });

  return getUserInfo(id);
};

const getUserInfo = async (id: string): Promise<userType> => {
  const userRef = doc(db, usersCollection, id);
  const user = await getDoc(userRef);

  if (user.exists()) {
    const { img, isOnline, username, email, bio, creationTime, lastSeen } =
      user.data();

    return {
      id: user.id,
      img,
      isOnline,
      username,
      email,
      bio,
      creationTime,
      lastSeen,
    };
  } else {
    toastErr('getUserInfo: user not found', setLoading);
    return defaultUser;
  }
};
