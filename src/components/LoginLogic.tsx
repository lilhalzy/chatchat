import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

const LoginLogic = () => {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const handleSignUp = () => {
  //   const data = { username, password, confirmPassword };
  //   console.log(data);
  // };
  // const handleSignIn = () => {
  //   const data = { username, password };
  //   console.log(data);
  // };

  return (
    <div className='w-full md:w-[500px]'>
      <h1 className='text-black text-center text-5xl mb-8 select-none font-title'>
        {login ? 'Login' : 'Register'}
      </h1>
      <div className='flex flex-col gap-3 bg-xWhite px-10 py-10 min-h-[150px] md:text-xl rounded-xl drop-shadow-md'>
        <Input
          name='username'
          type='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!login && (
          <Input
            name='confirm-password'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {login ? (
          <>
            {/* <Button onClick={handleSignIn} /> */}
            <Button  />
            <Button onClick={() => setLogin(false)} text='Register' secondary />
          </>
        ) : (
          <>
            {/* <Button text='Register' onClick={handleSignUp} /> */}
            <Button text='Register' />
            <Button onClick={() => setLogin(true)} text='Login' secondary />
          </>
        )}
      </div>
      <div className='flex justify-center mt-8 select-none drop-shadow-sm'>
        <p className='text-slate-300 italic hover:text-slate-400 transition-all'>
          chatchat
        </p>
      </div>
    </div>
  );
};

export default LoginLogic;
