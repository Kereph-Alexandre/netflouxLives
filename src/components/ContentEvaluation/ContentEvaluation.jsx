import { Icon } from "@iconify/react";

/**
 * Affiche la note globale d'un média après évaluation des utilisateurs
 * @param {note: number} props 
 * @returns un élément contenant une note et une icône
 */
export default function ContentEvaluation(props) {
  return (
    <aside className="contentEvaluation">
      <p>
        {props.note}
        <Icon icon="material-symbols:star-rate-rounded" />
      </p>
    </aside>
  );
}
