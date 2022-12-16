/**
 * Affiche la description du média
 * @param {text: string} props
 * @returns la description du média
 */
export default function DescribeText(props) {
  return (
    <>
      <p className="contentDescriptionText">{props.text}</p>
    </>
  );
}
