import React from "react";
import "../../css/Servicios.css";
import atencion from "../../img/Atencion24hs.png";
import seguimiento from "../../img/Seguimiento.png"
import envios from "../../img/enviosflex.png";

export default function Servicios(){
    return(
        <div className="Servicios">
            <h1>Nuestros Servicios</h1>
            <div className="ServiciosLogos">
                <img src={envios} alt="Envios Flex"/>
                <img src={atencion} alt="Atencion 24hs"/>
                <img src={seguimiento} alt="Seguimiento paquete"/>
            </div>
        </div>
    );
}