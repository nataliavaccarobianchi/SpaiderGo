import React from "react";
import '../../css/Header.css';
import instagram from "../../img/instagramLogo.png";
import whatsapp from "../../img/WhatsappLogo.png";
import facebook from "../../img/linkedInLogo.png";
import spaiderlogo from '../../img/SpaiderGoLogo.png';
import ingresar from "../../img/BotonIngresar.png";



export default function Header(){
    return(
        <header className = "header">
        <div className = "logos">
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
            <img src = {spaiderlogo} alt="SpaiderGoLogo" width="180vh"/>
            <img className="logIn" src = {ingresar} alt="login" height="40vh" />
        </header>
    )
}