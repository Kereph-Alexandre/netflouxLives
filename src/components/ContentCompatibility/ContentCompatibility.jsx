import { Icon } from "@iconify/react";

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
