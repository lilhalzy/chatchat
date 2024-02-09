import React from "react";
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
        className={`py-2 px-9 flex justify-center items-center rounded-xl gap-3 border-transparent border-2 ${
          !secondary ? 'hover:border-xGreen' : 'bg-xGreen text-xWhite'
        } ${
          secondary ? 'hover:bg-lime-600' : ''
        } text-xGreen cursor-pointer ${className}`}
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
