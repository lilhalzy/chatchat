import React from "react";

type InputProps = {
    name: string,
    value?: string | number,
    type?:string,
    onChange?:(e:unknown) => void,
    className?:string,
    onKeyDown?:(e:unknown) => void,
    disabled?: boolean
}

const Input = ({
    type = 'text',
    name,
    value,
    onChange,
    className,
    onKeyDown,
    disabled,
}: InputProps) => {
    return (
        <>
          <input
            type={type}
            placeholder={name}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={disabled}
            className={`flex-1 placeholder-gray-300 px-4 py-2 rounded-xl ${className}`}
            />
        </>
    )
}

export default Input;