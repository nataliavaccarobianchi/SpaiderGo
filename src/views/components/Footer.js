import React from "react";
import '../../css/Footer.css';
import instagram from "../../img/instagramLogo.png";
import whatsapp from "../../img/WhatsappLogo.png";
import facebook from "../../img/linkedInLogo.png";
import spaiderlogo from '../../img/SpaiderGoLogo.png';
import ingresar from "../../img/BotonIngresar.png";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <header className="header">
            <div className="logos">
            <a href="https://www.instagram.com/spaidergo?igsh=c3Y1cWVrN213eDRw&utm_source=qr">
                <img src={instagram} alt="gotoinstagram" />
            </a>
            {/* <a href="https://www.instagram.com/spaidergo?igsh=c3Y1cWVrN213eDRw&utm_source=qr">
                <img src={whatsapp} alt="gotowhatsapp" />
            </a> */}
            <a href="https://www.facebook.com/profile.php?id=61558613909638">
                <img src={facebook} alt="gotofacebook" />
            </a>
            </div>
            <div className="shorcuts">
                <Link to="sumate" spy={true} smooth={true} duration={500}>Home</Link>
                <Link to="demo" spy={true} smooth={true} duration={500}>| App</Link>
                <Link to="servicios" spy={true} smooth={true} duration={500}> | Servicios</Link>
                <Link to="partners" spy={true} smooth={true} duration={500}>| Partners</Link>
            </div>
        </header>
    );
}