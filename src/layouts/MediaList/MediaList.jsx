import "./MediaList.css";
import { Icon } from "@iconify/react";

export default function MediaList(props) {
  return (
    <section>
      <h2 className="listTitle">{props.titre}</h2>
      <div className="listModule">
        <div className="imageList">
          <span>
            <img src={props.src} alt="extrait de film" />
          </span>
          <span>
            <img src={props.src} alt="extrait de film" />
          </span>
          <span>
            <img src={props.src} alt="extrait de film" />
          </span>
          <span>
            <img src={props.src} alt="extrait de film" />
          </span>
          <span>
            <img src={props.src} alt="extrait de film" />
          </span>
          <span>
            <img src={props.src} alt="extrait de film" />
          </span>
          <span>
            <img src={props.src} alt="extrait de film" />
          </span>
        </div>
        <Icon icon="ic:baseline-keyboard-double-arrow-right" />
      </div>
    </section>
  );
}
