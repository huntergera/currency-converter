import Link from "next/link";

import {Logo} from "../icons/Logo";

export default function LogoTitle() {
  return (
    <Link href="/" className='flex items-center gap-x-3 font-bold text-xl font-workSans'>
      <Logo />
      Чіп Чендж
    </Link>
  );
}
