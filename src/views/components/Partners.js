import React from "react" ;
import "../../css/Partners.css";
import data from "./serviciosdata";

export default function Servicios(){
    const marcas = data.map((x) => {
        console.log(x);
        return x;
    });
    return (
        <div className="Partners">
                <h1>Nuestros Partners</h1>
                <div className="PartnersLogos">
                    {marcas.map((marca, i) => (
                        <div className="brand" key={i}>
                            <a href={marca.url} target="_blank"><img src={marca.img} alt={marca.name}/></a>
                        </div>
                    ))}
            </div>
        </div>
    );
}