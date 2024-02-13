import { toastErr } from './toast';

const catchErr = (err: { code?: string }) => {
  const { code } = err;
  if (code === 'auth/invalid-email') toastErr('invalid email');
  else if (code === 'auth/weak-password')
    toastErr('Password should be atleast 6 characters');
  else if (code === 'auth/user-not-found') toastErr('User not found');
  else if (code === 'auth/email-already-in-use')
    toastErr('This email already registered to this account');
  else if (code === 'auth/wrong-password') toastErr('Wrong password');
  else if (code === 'auth/requires-recent-login')
    toastErr('Log out and log in before updating your profile');
  console.log(err);
};

export default catchErr;
