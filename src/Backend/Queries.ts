import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from './Firebase.config';
import { toastErr, toastWarn } from '../utils/toast';
import catchErr from '../utils/catchErr';

export const signUp = (data: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const { email, password, confirmPassword } = data;

  if (email && password) {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password).then(({user}) => {
        console.log(user);
      })
      .catch((err) => catchErr(err));
    } else toastWarn(`Password must match`);
  } else toastErr(`Don't leave it blank, silly`);
};
