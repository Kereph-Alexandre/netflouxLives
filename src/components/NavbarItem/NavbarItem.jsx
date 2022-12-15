import "./NavbarItem.css";

/**
 * Affiche un élément de liste
 * @param {text:string} item
 * @returns un élément de liste
 */
export default function NavbarItem(item) {
  return (
    <>
      <li className="headerNavbarItem">{item.text}</li>
    </>
  );
}
