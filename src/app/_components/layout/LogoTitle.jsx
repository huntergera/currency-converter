import Link from "next/link";

import {Logo} from "../icons/Logo";

import {logoTitle} from "@/constants";

export default function LogoTitle() {
  return (
    <Link href="/" className='flex items-center gap-x-3 font-bold text-xl font-workSans'>
      <Logo />
      {logoTitle}
    </Link>
  );
}
