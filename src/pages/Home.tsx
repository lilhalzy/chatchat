import React from 'react';

const Home = () => {
  return (
    <>
      <div className='h-[100vh] flex flex-col justify-center items-center text-6xl sm:text-7xl'>
        <h1 className=''>Welcome</h1>
        <h1 className=''>To</h1>
        <h1 className='font-title italic'>chatchat</h1>
        <button className='mt-4 px-5 py-5 rounded-full bg-xGreen hover:bg-lime-600 focus:scale-105 focus:outline-none focus:ring focus:ring-xGreen transition-all focus:has'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#fff'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9'
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Home;
