import React from 'react';
import Input from './Input';
import Button from './Button';

const LoginLogic = () => {
  return (
    <div className='w-full md:w-[450px]'>
      <h1 className='text-black text-center text-5xl mb-8 select-none font-title'>
        Login
      </h1>
      <div className='flex flex-col gap-3 bg-xWhite px-10 py-10 min-h-[150px] md:text-xl rounded-xl drop-shadow-md'>
        <Input name='username' type='text' />
        <Input name='password' type='password' />
        <Button loading />
        <Button text='Register' secondary loading />
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
