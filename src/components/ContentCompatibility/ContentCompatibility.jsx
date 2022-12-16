import { Icon } from "@iconify/react";

import "./ContentCompatibility.css";
/**
 * Affiche la compatibilité d'un média au profil utilisateur
 * @param {compatibility:number} props
 * @returns la compatibilité sous forme de pourcentage
 */
export default function ContentCompatibility(props) {
  return (
    <span className="contentCompatibility">
      <Icon icon="material-symbols:thumb-up-rounded" />
      {props.compatibility}%
    </span>
  );
}
