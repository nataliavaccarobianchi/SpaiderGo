import React from "react";
import { Link } from "react-router-dom";
import "../../css/Sumate.css"

export default function Sumate() {


    const handleClick1 = () => {
        document.getElementById('QuieroSerSpaider').classList.add('hide');
        setTimeout(() => {
            document.getElementById('Auto').classList.replace('hide', 'auto');
            document.getElementById('Camion').classList.replace('hide', 'auto');
            // document.getElementById('Moto').classList.replace('hide', 'auto');

        }, 200);
    


    };
    const handleClick2 = () => {
        document.getElementById('Auto').classList.replace('auto', 'hide');
        document.getElementById('Camion').classList.replace('auto', 'hide');
        // document.getElementById('Moto').classList.replace('auto', 'hide');


    };


    return (
        <div className="Sumate">
            <h1>SUMATE AL EQUIPO</h1>
            <div className="botones">
            <button id="QuieroSerSpaider" onClick={handleClick1}>QUIERO SER SPAIDER</button>

            <Link to="/formAuto">
            <button className="hide" id="Auto" onClick={handleClick2}>Auto</button>
            </Link>
            <Link to="/formUtilitario">
            <button className="hide" id="Camion" onClick={handleClick2}>Utilitario</button>
            </Link>
            {/* <Link to="/formUtilitario">
            <button className="hide" id="Moto" onClick={handleClick2}>Moto</button>
            </Link> */}
            </div>
        </div>
    );
}