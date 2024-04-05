
import React, { useState } from 'react';
import '../../css/Demo.css';
import check from "../../img/botonDemo.png"

export default function Demo() {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick1 = () => {
        setActiveButton(1);
    };

    const handleClick2 = () => {
        setActiveButton(2);
    };

    const handleClick3 = () => {
        setActiveButton(3);
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
                    <img src="https://blog.roastmylandingpage.com/content/images/2022/05/request-a-demo-page.png" alt="Demo" />
                </div>
            </div>

        </div>
    )
}