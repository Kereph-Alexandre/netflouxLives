import "./ConnectIcon.css";
export default function ConnecIcon(props) {
  return (
    <div className="avatar">
      <img src={props.src} alt={props.alt} height={props.height} />
    </div>
  );
}
