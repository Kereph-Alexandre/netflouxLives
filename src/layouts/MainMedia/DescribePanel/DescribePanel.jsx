import DescribeText from "../../../components/DescribeText/DescribeText";
import DescribeTitle from "../../../components/DescribeTitle/DescribeTitle";

import "./DescribePanel.css";

/**
 * Affiche les différentes information relatives à un média (film, série, chaine YT, musique, jeu)
 * @param { titre:string,
 * text:string,
 * compatibility: number,
 * note: number
 * } props
 * @returns Un panneau descriptif du média correspondant
 */
export default function DescribePanel(props) {
  return (
    <article className="describePanel">
      <DescribeTitle titre={props.titre} />
      <DescribeText text={props.text} />
    </article>
  );
}
