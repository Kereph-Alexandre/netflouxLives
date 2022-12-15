import NavbarItem from "../NavbarItem/NavbarItem";

export default function Navbar({ items }) {
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <NavbarItem text={item} />
      ))}
    </>
  );
}
