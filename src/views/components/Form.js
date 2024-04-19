
import React from "react";
import "../../css/Form.css";
import delivery from "../../img/deliveryguy.png";
import nodemailer from "nodemailer";



export default function Form() {
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Create a transporter object with your email service provider details
    //     const transporter = nodemailer.createTransport({
    //         service: "your_email_service_provider",
    //         auth: {
    //             user: "your_email",
    //             pass: "your_password",
    //         },
    //     });

    //     // Prepare the email message
    //     const mailOptions = {
    //         from: "your_email",
    //         to: "recipient_email",
    //         subject: "Subject of the email",
    //         text: "Body of the email",
    //     };

    //     try {
    //         // Send the email
    //         await transporter.sendMail(mailOptions);
    //         console.log("Email sent successfully");
    //     } catch (error) {
    //         console.error("Error sending email:", error);
    //     }
    // };

    return (
        <div className="Container">
            <div className="rectangulo">
                <div className="Form">
                    <form onSubmit={handleSubmit}>
                        <input className="short" type="text" placeholder="Nombre" />
                        <input className="short" type="text" placeholder="Apellido" />
                        <input placeholder="email"></input>
                        <input placeholder="vehiculo"></input>
                        <input placeholder="¿Contas con experiencia? Contanos."></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}