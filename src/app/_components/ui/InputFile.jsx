import React, { forwardRef } from "react";

const InputFile = forwardRef(({ className, placeholder, ...props }, ref) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      ref={ref}
      {...props}
      className={`${className} rounded outline-none py-4 px-2 text-center border-gray-100 border border-solid text-gray font-medium text-20`}
    />
  );
});

export default InputFile;
