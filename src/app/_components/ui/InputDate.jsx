import React from "react";

const InputDate = ({ className, register, name, onChange, ...props }) => {
  return (
    <div className={`relative ${className}`}>
      <label htmlFor="">
        <input
          type='date'
          className={`appearance-none rounded outline-none py-4 px-2 text-center border-gray-100 border border-solid text-gray font-medium text-20 w-full`}
          {...props}
          {...register(name, {
            onChange,
          })}
        />
        <i className="absolute top-1/2 translate-y-[-50%] right-2 bg-calendar-icon bg-no-repeat bg-center bg-contain w-6 h-6 bg-white pointer-events-none"></i>
      </label>
    </div>
  );
};

export default InputDate;

