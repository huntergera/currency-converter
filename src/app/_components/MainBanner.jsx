import Image from "next/image";
import Button from "./Button";

export default function MainBanner() {
  return (
    <div className="bg-main-banner">
      <div className="container max-w-4xl flex gap-x-20 py-20 justify-between">
        <div>
          <h1 className="text-h1 text-blue-light">Чіп Чендж</h1>
          <p className="font-medium text-xl text-pale-slate-blue mt-6">Обмінник валют - навчальний</p>
          <Button className="text-gray bg-blue-light mt-7">Конвертер валют</Button>
        </div>
        <Image
          src="/images/standard-mastercard-card.png"
          alt="Mastercard Logo"
          className="dark:invert"
          width={341}
          height={216}
        />
      </div>
    </div>
  )
}
