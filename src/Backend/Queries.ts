import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { authDataType, setLoadingType } from '../Types';
import catchErr from '../utils/catchErr';
import { toastErr, toastWarn } from '../utils/toast';
import { auth } from './Firebase.config';

export const signUp = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void
) => {
  const { email, password, confirmPassword } = data;
  // loading TRUE
  setLoading(true);
  if (email && password) {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          setLoading(false);
          reset();
        })
        .catch((err) => {
          catchErr(err);
          setLoading(false);
        });
    } else toastWarn(`Password must match`);
  } else toastErr(`Don't leave it blank, silly`);
};

export const signIn = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void
) => {
  const { email, password } = data; // destructure
  // loading TRUE
  setLoading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user);
      setLoading(false);
      reset()
    })
    .catch((err) => {
      catchErr(err)
      setLoading(false)
    });
};
