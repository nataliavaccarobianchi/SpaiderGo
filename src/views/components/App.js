import React from "react";
import { Element } from "react-scroll";
import Header from "./Header";
import Sumate from "./Sumate";
import Demo from "./Demo";
import Partners from "./Partners";
import Servicios from "./Servicios";
import Footer from "./Footer";

export default function App() {
    return (
        <div>
            <Header/>
            <Element name="sumate"><Sumate/></Element>
            <Element name="demo"><Demo/></Element>
            <Element name="servicios"><Servicios/></Element>
            <Element name="partners"><Partners/></Element>
            <Footer/>
        </div>
    );
}
