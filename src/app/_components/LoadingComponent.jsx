import React from 'react';
import Image from "next/image";

const LoadingComponent = () => {
  return (
    <div className="absolute w-full h-full bg-white opacity-50 z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <Image
        src="/images/icons/loading-icon.svg"
        alt="LoadingComponent"
        width={60}
        height={60}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default LoadingComponent;
