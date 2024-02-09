import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    // bar
    <div className='flex flex-wrap justify-between py-2 sm:py-3 mx-4'>
      {/* logo */}
      <div className='flex text-xl sm:text-2xl drop-shadow-sm cursor-pointer items-center'>
        <h1 className='font-title text-xGreen hover:text-lime-600 transition-all'>
          chatchat
        </h1>
      </div>
      {/* button add new list */}
      <div className='flex'>
        <Button
          text='Add New List'
          secondary
          className='text-[10px] font-semibold sm:text-[12px] px-2 py-1 sm:px-6 sm:py-2'
        />
      </div>
    </div>
  );
};

export default Header;
