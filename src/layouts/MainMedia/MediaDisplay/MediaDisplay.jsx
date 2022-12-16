import ContentPanel from "../ContentPanel/ContentPanel";

import "./MediaDisplay.css";

export default function MediaDisplay(props) {
  return (
    <main className="mediaDisplay">
      <ContentPanel {...props} />
      <img src={props.image} alt="Extrait du media" />
    </main>
  );
}
