import MainNavigation from "./MainNavigation";
import LogoTitle from "@/app/_components/layout/LogoTitle";
import UserAccount from "@/app/_components/layout/UserAccount";

import {navLinks} from "@/helpers/constants/common";

export default function Header() {
  return (
    <header className="py-8 bg-blue-light">
      <div className="container flex gap-x-20">
        <LogoTitle />
        <MainNavigation navLinks={navLinks}/>
        <UserAccount />
      </div>
    </header>
  );
}
