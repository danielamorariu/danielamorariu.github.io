import contactImg from "../assets/img/image-profil-1.svg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gsccbgn', 'template_cdjpem9', form.current, {
                publicKey: '6-b6V3sLfA66NmBWi',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <div className="connection" id="connection">
            <div className="connection-wrapper inner">
                <div className="connection__image">
                    <img src={contactImg} alt="Contact Us" width="300"/>
                </div>

                <div className="connection__contact" id="connect">
                    <h2>Get In Touch</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="First Name" name="firstname" />

                        <input type="text" placeholder="Last Name" name="lastname" />

                        <input type="email" placeholder="Email Address" name="email" />

                        <input type="tel" placeholder="Phone No." name="phone" />

                        <textarea rows="3" placeholder="Message" name="message"></textarea>
                        <button type="submit" value="Send message">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
