import Image from "next/image";
import Button from "./Button";

export default function ConverterInfo() {
  return (
    <div className="container max-w-4xl flex gap-x-20 py-32 justify-between">
      <div>
        <h2 className="text-h2">Конвертер валют</h2>
        <p className="text-xl text-gray mt-6">Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
        <button></button>
        <Button className="mt-7 bg-blue text-blue-light">Конвертувати валюту</Button>
      </div>
      <Image
        src="/images/card.jpg"
        alt="Mastercard Logo"
        className="dark:invert"
        width={436}
        height={314}
      />
    </div>
  )
}
