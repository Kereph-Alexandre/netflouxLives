import './Button.css';

/**
 * Bouton super sympa
 * @param {{text:string}} props 
 * @returns un super bouton
 */
export const Button = (props) => {
    return (
        <button className="contact" onClick={props.onClick}>
            {props.text}
        </button>
    )
}