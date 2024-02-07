import React from 'react';
import LoginLogic from '../components/LoginLogic';

const Login = () => {
  return (
    <div className='bg-xWhite h-[100vh] flex items-center justify-center p-10'>
      <LoginLogic />
      {/* <div className="h-full w-full bg-gradient-to-b from-xGreen to-xWhite absolute top-0 -z-10"/> */}
    </div>
  );
};

export default Login;
