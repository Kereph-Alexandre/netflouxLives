import ContentCompatibility from "../../../components/ContentCompatibility/ContentCompatibility";
import ContentEvaluation from "../../../components/ContentEvaluation/ContentEvaluation";
import DescribePanel from "../DescribePanel/DescribePanel";

import "./ContentPanel.css";

export default function ContentPanel(props) {
  return (
    <aside className="contentPanel">
      <DescribePanel {...props} />
      <ContentCompatibility {...props} />
      <ContentEvaluation {...props} />
    </aside>
  );
}
