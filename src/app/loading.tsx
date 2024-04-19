import Image from "next/image";

interface LoadingProps {
    className?: string;
}

const Loading: React.FC<LoadingProps> = ({className}) => {
    return (
      <div className={`container max-w-4xl py-20 flex justify-center ${className}`}>
        <Image
          src="/images/icons/fade-stagger-circles.svg"
          alt="Loading"
          width={60}
          height={60}
        />
      </div>
    );
};

export default Loading;
