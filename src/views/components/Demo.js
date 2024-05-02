import React, { useState } from 'react';
import '../../css/Demo.css';
import check from "../../img/botonDemo.png"
import img1 from "../../img/fotos quadmids/1.png"
import img2 from "../../img/fotos quadmids/2.png"
import img3 from "../../img/fotos quadmids/3.png"

export default function Demo() {
    const [activeButton, setActiveButton] = useState(1);
    const [imgSrc, setImgSrc] = useState(img2);

    const handleClick1 = () => {
        setActiveButton(1);
        setImgSrc(img2);
    };

    const handleClick2 = () => {
        setActiveButton(2);
        setImgSrc(img1); // Replace with your image URL
    };

    const handleClick3 = () => {
        setActiveButton(3);
        setImgSrc(img3); // Replace with your image URL
    };

    return (
        <div className="DemoTitle">
            <h1>Nuestra App</h1>
            <div className="Demo">
                <div className="botonesDemo">
                    <button className={activeButton === 1 ? 'active' : ''} onClick={handleClick1}><img src={check} alt="button" /></button>
                    <button className={activeButton === 2 ? 'active' : ''} onClick={handleClick2}><img src={check} alt="button" /></button>
                    <button className={activeButton === 3 ? 'active' : ''} onClick={handleClick3}><img src={check} alt="button" /></button>
                </div>
                <div className="box">
                    <img src={imgSrc} alt="Demo" />
                </div>
            </div>
        </div>
    )
}