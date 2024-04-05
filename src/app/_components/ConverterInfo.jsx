import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

import {converterInfoButtonText, converterInfoText, converterInfoTitle} from "../../constants";

export default function ConverterInfo() {
  return (
    <div className="container max-w-4xl flex gap-x-20 py-32 justify-between">
      <div>
        <h2 className="text-h2">{converterInfoTitle}</h2>
        <p className="text-xl text-gray mt-6">{converterInfoText}</p>
        <Link href="/converter">
          <Button className="mt-7 bg-blue text-blue-light">{converterInfoButtonText}</Button>
        </Link>
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
