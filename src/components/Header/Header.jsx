import "./Header.css";
import LogoNetfloux from "../LogoNetFloux/LogoNetfloux";
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
    <header>
      <LogoNetfloux />
      <Navbar items={navbarItems} />
      {/* Connexion */}
    </header>
  );
}
