import React from "react";

const Input = ({
  className,
  placeholder,
  register,
  error,
  name,
  valueAsNumber,
  onChange,
  type = valueAsNumber ? 'number' : 'text',
}) => {
  return (
    <div className="inputWrapper">
      <input
        className={`${className} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded outline-none py-4 px-2 text-center border-gray-100 border border-solid text-gray font-medium text-20`}
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, {
          onChange,
          valueAsNumber,
        })}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default Input;

