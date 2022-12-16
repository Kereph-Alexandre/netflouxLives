import "./Header.css";
import LogoNetfloux from "../LogoNetFloux/LogoNetfloux";
import Navbar from "../Navbar/Navbar";
import ConnecIcon from "../ConnectIcon/ConnectIcon";

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
    <header className="mainHeader">
      <LogoNetfloux />
      <Navbar items={navbarItems} />
      <ConnecIcon
        src="assets\perm_identity_black_48dp.svg"
        alt="Icone de connexion au compte utilisateur"
        height="50px"
      />
    </header>
  );
}
