import Link from "next/link";

export default function ButtonLink ({children, className, href}) {
  return (
    <Link href={href} className={`inline-block py-4 px-7 text-18 font-medium rounded ${className}`}>
      {children}
    </Link>
  )
}
