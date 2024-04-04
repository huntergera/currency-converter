import Link from "next/link";

import {EnterIcon} from "../icons/EnterIcon";

import {userAccountTitle} from "@/constants";

export default function UserAccount() {
  return (
    <Link href="/account" className='flex ml-auto gap-x-4 text-black hover:text-gray transition-colors'>
      <EnterIcon />
      {userAccountTitle}
    </Link>
  );
}
