import { Icon } from "@iconify/react";

/**
 * Affiche la compatibilité d'un média au profil utilisateur
 * @param {compatibility:number} props
 * @returns la compatibilité sous forme de pourcentage
 */
export default function ContentCompatibility(props) {
  return (
    <aside className="contentCompatibility">
      <p>
        <Icon icon="material-symbols:thumb-up-rounded" />
        {props.compatibility}%
      </p>
    </aside>
  );
}
