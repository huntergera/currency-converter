import Image from "next/image";

export default function HistoryItem() {
  return (
    <div className="flex items-center p-4 bg-white rounded gap-4 w-[47%] text-18">
      <span className="text-gray-100">25.11.2020</span>
      <span className="text-gray">1000 UAH</span>
      <Image
        src="/images/icons/icon-arrow.svg"
        alt="icon"
        width={17}
        height={12}
      />
      <span className="text-gray">36,65 USD</span>
    </div>
  );
};

