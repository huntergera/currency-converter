import Link from "next/link";
import Image from "next/image";

export default function LogoTitle() {
  return (
    <Link href="/" className='flex items-center gap-x-3 font-bold text-xl font-workSans'>
      <Image
        src="/images/icons/logo.svg"
        alt="Logo"
        width={23}
        height={23}
      />
      Чіп Чендж
    </Link>
  );
}
