import React, { useState } from 'react';
import '../../css/Demo.css';
import check from "../../img/botonDemo.png"
import img2 from "../../img/img2.webp"
import img3 from "../../img/img3.png"

export default function Demo() {
    const [activeButton, setActiveButton] = useState(null);
    const [imgSrc, setImgSrc] = useState("https://blog.roastmylandingpage.com/content/images/2022/05/request-a-demo-page.png");

    const handleClick1 = () => {
        setActiveButton(1);
        setImgSrc("https://blog.roastmylandingpage.com/content/images/2022/05/request-a-demo-page.png");
    };

    const handleClick2 = () => {
        setActiveButton(2);
        setImgSrc(img2); // Replace with your image URL
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