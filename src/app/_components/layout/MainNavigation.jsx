import NavLink from "./NavLink";

export default function MainNavigation({navLinks, classes}) {
  return (
    <div className={`flex gap-x-9 ${classes}`}>
      {navLinks?.map((item, index) =>
        <NavLink
          key={index}
          item={item}
        />
      )}
    </div>
  );
}
