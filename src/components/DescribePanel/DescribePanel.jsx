import ContentCompatibility from "../ContentCompatibility/ContentCompatibility";
import ContentEvaluation from "../ContentEvaluation/ContentEvaluation";
import DescribeText from "../DescribeText/DescribeText";
import DescribeTitle from "../DescribeTitle/DescribeTitle";

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
      <ContentCompatibility compatibility={props.compatibility} />
      <ContentEvaluation note={props.note} />
    </article>
  );
}
