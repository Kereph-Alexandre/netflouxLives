import Navbar from "../Navbar/Navbar";

const navbarItems = [
  "Films",
  "Series",
  "Youtube",
  "Musique",
  "Jeux",
  "Tendances",
];

export default function Header() {
  return (
    <>
      {/* Logo */}
      <Navbar items={navbarItems} />
      {/* Connexion */}
    </>
  );
}
