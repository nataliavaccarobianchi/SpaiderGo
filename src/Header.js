import React from "react";
import './css/Header.css';
import instagram from "./img/instagramLogo.png";
import whatsapp from "./img/WhatsappLogo.png";
import linkedin from "./img/linkedInLogo.png";
import spaiderlogo from './img/SpaiderGoLogo.png';
import ingresar from "./img/BotonIngresar.png";



export default function header(){
    return(
        <header className = "header">
        <div className = "logos">
            <a href="https://www.instagram.com/spaidergo/">
            <img src={instagram} alt="gotoinstagram" />
            </a>
            <a href="https://www.instagram.com/spaidergo/">

            <img src={whatsapp} alt="gotowhatsapp"/>
            </a>
            <a href="https://www.instagram.com/spaidergo/">
            <img src={linkedin} alt="gotolinkedin"/>
            </a>
            
        </div>
            <img src = {spaiderlogo} alt="SpaiderGoLogo" width="180vh"/>
            <img className="logIn" src = {ingresar} alt="login" height="40vh" />
        </header>
    )
}