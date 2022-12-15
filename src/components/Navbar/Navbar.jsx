import "./Navbar.css";
import NavbarItem from "../NavbarItem/NavbarItem";

/**
 * Retourne un composant NavbarItem pour chaque entrée de la liste passée en paramètre
 * @param {item:string}
 * @returns La liste de liens
 */
export default function Navbar({ items }) {
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <NavbarItem text={item} key={index} />
        ))}
      </ul>
    </>
  );
}
