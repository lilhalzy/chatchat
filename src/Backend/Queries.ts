import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from './Firebase.config';

export const signUp = (data: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const { email, password, confirmPassword } = data;

  if (email && password) {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
        console.log(userCred);
      });
    } else console.log('password must match');
  } else {
    toast.error(`Don't be silly, put something in there`, {
      position: "top-right",
      autoClose: 1350,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
};
