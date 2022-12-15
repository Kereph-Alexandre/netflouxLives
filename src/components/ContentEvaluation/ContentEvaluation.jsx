import { Icon } from "@iconify/react";

import "./ContentEvaluation.css";

/**
 * Affiche la note globale d'un média après évaluation des utilisateurs
 * @param {note: number} props
 * @returns un élément contenant une note et une icône
 */
export default function ContentEvaluation(props) {
  return (
    <span className="contentEvaluation">
      {props.note}
      <Icon icon="material-symbols:star-rate-rounded" />
    </span>
  );
}
