/**
 * Affiche le titre du média
 * @param {title : string} props
 * @returns le titre du média
 */
export default function DescribeTitle(props) {
  return (
    <>
      <h2 className="ContentTitle">{props.titre}</h2>
    </>
  );
}
