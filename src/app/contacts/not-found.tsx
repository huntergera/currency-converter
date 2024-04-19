import Link from 'next/link'
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="container max-w-4xl py-20 text-center h-full">
            <Image
                src="/images/icons/404.svg"
                alt="404"
                className="mx-auto"
                width={341}
                height={216}
                priority
            />
            <Link href="/" className="mt-2 inline-block text-blue">Return Home</Link>
        </div>
    )
}
