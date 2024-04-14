import React from "react";

const Input = ({
  className,
  placeholder,
  register,
  error,
  name,
  onChange,
  type,
  ...props
}) => {
  return (
    <div className="flex flex-col max-w-56">
      <input
        className={`${className} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded outline-none py-4 px-2 text-center border-gray-100 border border-solid text-gray font-medium text-20`}
        type={type}
        name={name}
        {...props}
        placeholder={placeholder}
        {...register(name, {
          onChange
        })}
      />
      {error && <span className="text-red">{error.message}</span>}
    </div>
  );
};

export default Input;

