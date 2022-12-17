import { Icon } from "@iconify/react";
import { Button } from "../../components/button/Button";
import Searchbar from "../../components/Searchbar/Searchbar";

import "./Fullbar.css";

export default function Fullbar(props) {
  return (
    <section className="searchOptions">
      <Searchbar />
      <Button text={props[0]} />
      <Button text={props[1]} />
      <Button text={props[2]} />
      <Button text={props[3]} />
      <Button text={props[4]} />
      <span className="nextIcon">
        <Icon icon="material-symbols:keyboard-double-arrow-right-rounded" />
      </span>
    </section>
  );
}
