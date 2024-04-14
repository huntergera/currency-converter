import React from 'react';
import Image from "next/image";

const LoadingComponent = () => {
  return (
    <div className="p-4 w-full h-full flex items-center justify-center">
      <Image
        src="/images/icons/loading-icon.svg"
        alt="LoadingComponent"
        width={60}
        height={60}
      />
    </div>
  );
};

export default LoadingComponent;
