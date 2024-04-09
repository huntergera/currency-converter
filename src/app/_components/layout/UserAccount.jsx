import Link from "next/link";

import Image from "next/image";

export default function UserAccount() {
  return (
    <Link href="/account" className='flex items-center ml-auto gap-x-4 text-black hover:text-gray transition-colors hover:*:fill-gray'>
      <Image
        src="/images/icons/enter-icon.svg"
        alt="enter icon"
        width={20}
        height={22}
      />
      Особистий кабінет
    </Link>
  );
}
