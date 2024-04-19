import Link from 'next/link'
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="bg-blue-light">
            <div className="container max-w-4xl py-20 text-center h-full">
                <Image
                    src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
                    alt="404"
                    className="mx-auto"
                    width={341}
                    height={216}
                    priority
                />
                <p className="text-h2">404 PAGE</p>
                <p className="p-a">The page you were looking for could not be found</p>
                <Link href="/" className="mt-2 inline-block text-blue">Return Home</Link>
            </div>
        </div>
    )
}
