import { Icon } from "@iconify/react";

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
