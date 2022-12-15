import DescribeTitle from "../DescribeTitle/DescribeTitle";

export default function DescribePanel(props) {
  return (
    <div className="describePanel">
      <DescribeTitle titre={props.titre} />
    </div>
  );
}
