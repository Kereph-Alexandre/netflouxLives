import './Nav.css';

export const Nav = (props) => {
    return (
        <a className="nav" href={props.href}>{props.text}</a>
    );
}