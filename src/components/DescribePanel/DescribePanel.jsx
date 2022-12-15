import ContentCompatibility from "../ContentCompatibility/ContentCompatibility";
import DescribeText from "../DescribeText/DescribeText";
import DescribeTitle from "../DescribeTitle/DescribeTitle";

export default function DescribePanel(props) {
  return (
    <article className="describePanel">
      <DescribeTitle titre={props.titre} />
      <DescribeText text={props.text} />
      <ContentCompatibility compatibility={props.compatibility} />
      {/* <ContentEvaluation note={props.note} /> */}
    </article>
  );
}
