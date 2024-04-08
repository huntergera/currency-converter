import Image from "next/image";

export default function ContactItem({number, title, iconPath, width}) {
  return (
    <div className="flex items-start gap-4">
      <Image
        className="mt-1.5 shrink-0"
        src={iconPath}
        alt={"Іконка телефону"}
        width={width}
        height={16}
      />
      <div>
        <a href={`tel:${number.replace(/\s/g, "")}`}>{number}</a>
        <p className="text-12 text-gray mt-2">{title}</p>
      </div>
    </div>
  );
}
