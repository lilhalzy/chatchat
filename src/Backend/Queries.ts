import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "./Firebase.config";

export const signUp = (data: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const { email, password, confirmPassword } = data;
    
  if (email && password) {
    if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password).then(userCred => {
            console.log(userCred);
        })
    } else console.log("password must match");
  } else console.log('Make sure to fill in your stuff');
};
