import React from "react";
import "./css/Sumate.css"

export default function sumate() {
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
        setTimeout(() => {
            document.getElementById('InfoAuto').classList.replace('hide', 'info');
        }, 200);


    };

    return (
        <div className="Sumate">
            <h1>SUMATE AL EQUIPO</h1>
            <div className="botones">
            <button id="QuieroSerSpaider" onClick={handleClick1}>QUIERO SER SPAIDER</button>
            <button className="hide" id="Auto" onClick={handleClick2}>Auto</button>
            <button className="hide" id="Camion" onClick={handleClick2}>Camion</button>
            <form className="hide" id="InfoAuto">
                <label htmlFor="nombre">Nombre y Apellido:</label>
                <textarea id="details" name="details"></textarea>

                <label htmlFor="vehiculo">Vehiculo (modelo y año):</label>
                <textarea id="details" name="details"></textarea>

                <label htmlFor="numero">Numero de telefono:</label>
                <textarea id="details" name="details"></textarea>

                <label htmlFor="mail">Mail:</label>
                <textarea id="details" name="details"></textarea>


                <button className="submit" type="submit">Submit</button>
            </form>
            </div>
        </div>
    );
}