import React from "react";
import Input from "./Input";

const LoginLogic = () => {
    return (
        <div className='w-full md:w-[450px]'>
        <h1 className='text-black text-center font-bold text-4xl mb-8'>
          Login
        </h1>
        <div className='flex flex-col gap-3 bg-xWhite px-10 py-10 min-h-[150px] md:text-xl rounded-xl drop-shadow-md'>
          <Input name='username' type='text' />
          <Input name='password' type='password' />
        </div>
      </div>
    )
}

export default LoginLogic