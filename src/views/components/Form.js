import React from "react";
import "../../css/Form.css"
import delivery from "../../img/deliveryguy.png"



export default function Form() {
    return (
        <div className="Container">
            <div className="rectangulo">
            <div className="Form">
                <form>
                    <input className="short" type="text" placeholder="Nombre" />
                    <input className="short" type="text" placeholder="Apellido" />
                    <input placeholder="email"></input>
                    <input placeholder="vehiculo"></input>
                    <input placeholder="¿Contas con experiencia? Contanos."></input>
                    <button>Submit</button>
                </form>
            </div>
            </div>
        </div>
    )}