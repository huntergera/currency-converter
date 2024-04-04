import Link from "next/link";

export default function NavLink({item}) {
    return (
        <Link href={item.link} className="text-gray hover:text-blue transition-colors">
            {item.title}
        </Link>
    );
}
