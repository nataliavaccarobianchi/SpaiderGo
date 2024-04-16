import React from "react";
import { Element } from "react-scroll";
import Header from "./Header";
import Sumate from "./Sumate";
import Demo from "./Demo";
import Partners from "./Partners";
import Servicios from "./Servicios";
import Footer from "./Footer";
import Form from "./Form";

export default function App() {
    return (
        <div>
            <Header/>
            <div className="container">
            <Element name="sumate"><Sumate/></Element>
            <Element name="demo"><Demo/></Element>
            <Element name="servicios"><Servicios/></Element>
            <Element name="partners"><Partners/></Element>
            <Footer/> 
            </div>
            {/* <Form/> */}
        </div>
    );
}
