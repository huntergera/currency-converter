import LogoTitle from "@/app/_components/layout/LogoTitle";
import MainNavigation from "@/app/_components/layout/MainNavigation";
import ContactItem from "@/app/_components/layout/ContactItem";
import Socials from "@/app/_components/layout/Socials";

import {contacts, footerInfo, navLinks} from "@/constants";

export default function Footer() {
  return (
    <div className="py-8 bg-blue-light">
      <div className="container grid grid-cols-5 gap-2">
        <div>
          <LogoTitle />
          <div className="mt-4">
            {footerInfo?.map((item, index) =>
              <p key={index} className="text-12 text-gray">{item}</p>
            )}
          </div>
        </div>

        <MainNavigation navLinks={navLinks} classes={`flex-col gap-y-5 font-medium`}/>

        {contacts?.map((item, index) =>
          <ContactItem
            key={index}
            item={item}
          />
        )}

        <Socials />
      </div>
    </div>
  );
}
