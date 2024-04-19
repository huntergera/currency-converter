import Image from "next/image";

interface HistoryItemProps {
    item: {
        date: string;
        amountFrom: string;
        amountTo: string;
    }
}

const HistoryItem: React.FC<HistoryItemProps> =({item}) => {
  return (
    <div className="flex items-center p-4 bg-white rounded gap-4 w-[47%] text-18">
      <span className="text-gray-100">{item.date}</span>
      <span className="text-gray">{item.amountFrom}</span>
      <Image
        src="/images/icons/icon-arrow.svg"
        alt="icon"
        width={17}
        height={12}
      />
      <span className="text-gray">{item.amountTo}</span>
    </div>
  );
};

export default HistoryItem;

