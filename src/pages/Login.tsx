import React from 'react';

const Login = () => {
  return (
    <div className='bg-white h-[100vh] flex items-center justify-center p-10'>
      <div className='w-full md:w-[450px]'>
        <h1 className='text-black text-center font-bold text-4xl mb-8'>
          Login
        </h1>
        <div className='flex flex-col gap-3 bg-xWhite px-10 py-10 min-h-[150px] md:text-xl rounded-xl drop-shadow-md'>
          <input
            type='text'
            placeholder='username'
            className='flex-1 placeholder-gray-300 px-4 py-2 rounded-xl'
          />
          <input
            type='text'
            placeholder='password'
            className='flex-1 placeholder-gray-300 px-4 py-2 rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
