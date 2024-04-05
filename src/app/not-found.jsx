import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="container max-w-4xl py-20 text-center h-full">
            <h2 className="text-h2">Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className="mt-2 inline-block text-blue">Return Home</Link>
        </div>
    )
}
