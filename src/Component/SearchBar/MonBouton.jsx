import "./MonBouton.css";

/**
 * Bouton 
 * @param {}props
 * @returns
 */
export const MonBouton = (props) =>{
return (
    <button className="mon-bouton" onClick={props.onClick}>
        {props.text}
        </button>


)
}
