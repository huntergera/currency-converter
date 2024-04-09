'use client';
import { usePathname } from 'next/navigation';
import NavLink from "./NavLink";

export default function MainNavigation({navLinks, classes}) {
  const pathname = usePathname()
  if(!navLinks?.length ) return null;

  return (
    <div className={`flex gap-x-9 ${classes}`}>
      {navLinks?.map((item, index) =>
        <NavLink
          key={index}
          item={item}
          className={`link ${pathname === item.link ? '!text-blue' : ''}`}
        />
      )}
    </div>
  );
}
