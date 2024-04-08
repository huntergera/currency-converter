import Image from "next/image";

import ButtonLink from "./ui/ButtonLink";

export default function ConverterInfo() {
  return (
    <div className="container max-w-4xl flex gap-x-20 py-32 justify-between">
      <div>
        <h2 className="text-h2">Конвертер валют</h2>
        <p className="text-xl text-gray mt-6">Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
        <ButtonLink
          href="/converter"
          className="mt-7 bg-blue text-blue-light hover:bg-blue/90 transition-colors"
        >
          Конвертувати валюту
        </ButtonLink>
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
