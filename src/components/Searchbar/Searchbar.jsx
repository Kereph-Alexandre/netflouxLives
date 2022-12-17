import { Icon } from "@iconify/react";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <span className="searchbar">
      <input type="text" placeholder="Votre recherche ici..." />
      <span className="icon">
        <Icon icon="material-symbols:search" />
      </span>
    </span>
  );
}
