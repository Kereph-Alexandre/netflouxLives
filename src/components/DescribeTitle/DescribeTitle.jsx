import "./DescribeTitle.css";

/**
 * Affiche le titre du média
 * @param {title : string} props
 * @returns le titre du média
 */
export default function DescribeTitle(props) {
  return (
    <>
      <h2 className="contentTitle">{props.titre}</h2>
    </>
  );
}
