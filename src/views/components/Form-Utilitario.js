
import React, { useRef } from 'react';
import "../../css/Form.css";
import emailjs from '@emailjs/browser';

import delivery from "../../img/deliveryguy.png";



export default function Form() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x8wfrp4', 'template_sxppmut', form.current, {
        publicKey: 'y_CLF_lbe7k_KhpNu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('¡La postulación fue exitosa!');
          form.current.reset(); 

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }; 

    return (
        <div className="Container">
            <div className="rectangulo">
                <div className="Form">
                    <form ref={form} onSubmit={sendEmail}>                        
                        <input className="short" type="text" placeholder="Nombre" name="nombre" required/>
                        <input className="short" type="text" placeholder="Apellido" name="apellido" required/>
                        <input placeholder="email" type="email" name="mail" required></input>
                        <input placeholder="vehiculo" type="text" name="vehiculo" required ></input>
                        <input placeholder="¿Contas con experiencia? Contanos." type="text" name="experiencia" required></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


