import { Button } from "../../components/button/Button"
import { Nav } from "../../components/nav/Nav"
import { Social } from "../../components/social/Social"
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <container className="menuGlobal">
                <container className="menu">
                    <div className="listIcon">
                        <Social iconName="facebook" />
                        <Social iconName="twitter" />
                        <Social iconName="linkedin" />
                        <Social iconName="instagram" />
                    </div>
                    <div className="nav">                 
                        <Nav href="" text="À propos"/>
                        <Nav href="" text="Fonctionnalités"/>
                        <Nav href="" text="Prix"/>
                        <Nav href="" text="Galerie"/>
                        <Nav href="" text="L'Équipe"/>
                    </div>
                </container>
            <div className="button">
                <Button text="Nous contacter"/>
            </div>
            </container>
            <hr />
            <div>
                <p>© 2022 Tous droits réservés</p>
            </div>
        </footer>
    )
}