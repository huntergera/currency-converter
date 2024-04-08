import Image from "next/image";

export default function Loading() {
    return (
      <div className="container max-w-4xl py-20 flex justify-center">
        <Image
          src="/images/icons/loading-icon.svg"
          alt="Loading"
          width={60}
          height={60}
        />
      </div>
    )
}
