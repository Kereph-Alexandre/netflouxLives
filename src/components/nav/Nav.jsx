import './Nav.css';

/**
 * Liens de navigation du footer
 * @param {{href:string, text:string}} props 
 * @returns des liens
 */
export const Nav = (props) => {
    return (
        <a className="nav" href={props.href}>{props.text}</a>
    );
}