import MainNavigation from "./MainNavigation";
import LogoTitle from "@/app/_components/layout/LogoTitle";
import UserAccount from "@/app/_components/layout/UserAccount";

import {navLinks} from "@/constants";

export default function Header() {
  return (
    <div className="py-8 bg-blue-light">
      <div className="container flex gap-x-20">
        <LogoTitle />
        <MainNavigation navLinks={navLinks}/>
        <UserAccount />
      </div>
    </div>
  );
}
