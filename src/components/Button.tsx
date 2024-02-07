import React from 'react';
import Spinner from './Spinner';

type ButtonProps = {
  text?: string;
  className?: string;
  secondary?: boolean;
  onClick?: () => void;
  loading?: boolean;
};

const Button = ({
  className,
  secondary,
  text = 'Login',
  onClick,
  loading = false,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`py-2 px-9 flex justify-center rounded-xl gap-3 hover:${ secondary ? 'text-xWhite' : 'text-xWhite'} hover:${secondary ? 'bg-xGreen' : 'bg-xGreen'} transition-all hover:drop-shadow-md ${className} ${loading && 'cursor-wait'}`}
        onClick={onClick}
        disabled={loading}
      >
        {loading && <Spinner />}
        {text}
      </button>
    </>
  );
};

export default Button;
