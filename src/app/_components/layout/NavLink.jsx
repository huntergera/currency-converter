import Link from "next/link";

export default function NavLink({item, className}) {
    return (
        <Link href={item.link} className={`text-gray hover:text-blue transition-colors ${className}`}>
            {item.title}
        </Link>
    );
}
