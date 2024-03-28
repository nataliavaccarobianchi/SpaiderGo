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
            <img src={instagram} alt="gotoinstagram"/>
            <img src={whatsapp} alt="gotowhatsapp"/>
            <img src={linkedin} alt="gotolinkedin"/>
        </div>
            <img src = {spaiderlogo} alt="SpaiderGoLogo" width="180vh"/>
            <img src = {ingresar} alt="login" height="40vh" />
        </header>
    )
}