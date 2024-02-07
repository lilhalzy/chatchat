import React from 'react';

type Props = {};

const Spinner = ({}: Props) => {
  return (
    <div className='border-4 animate-spin border-t-xWhite w-5 h-5 rounded-full'></div>
  );
};

export default Spinner;
