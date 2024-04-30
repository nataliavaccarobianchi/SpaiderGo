import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/Sumate.css"

export default function sumate() {

    const history = useHistory();

    const handleClick1 = () => {
        document.getElementById('QuieroSerSpaider').classList.add('hide');
        setTimeout(() => {
            document.getElementById('Auto').classList.replace('hide', 'auto');
            document.getElementById('Camion').classList.replace('hide', 'auto');
        }, 200);
    


    };
    const handleClick2 = () => {
        document.getElementById('Auto').classList.replace('auto', 'hide');
        document.getElementById('Camion').classList.replace('auto', 'hide');


    };
    const handleClick3 = () => {
        document.getElementById('Auto').classList.replace('auto', 'hide');
        document.getElementById('Camion').classList.replace('auto', 'hide');
        
        history.push("/form-Utilitario");


    };

    return (
        <div className="Sumate">
            <h1>SUMATE AL EQUIPO</h1>
            <div className="botones">
            <button id="QuieroSerSpaider" onClick={handleClick1}>QUIERO SER SPAIDER</button>
            <button className="hide" id="Auto" onClick={handleClick2}>Auto</button>
            <button className="hide" id="Camion" onClick={handleClick3}>Utilitario</button>
            {/* moto */}
            </div>
        </div>
    );
}