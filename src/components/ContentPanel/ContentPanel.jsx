import ContentCompatibility from "../ContentCompatibility/ContentCompatibility";
import ContentEvaluation from "../ContentEvaluation/ContentEvaluation";
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
