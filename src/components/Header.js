import ilustration from "../assets/img/image-profil-1.svg";
import NET from 'vanta/src/vanta.net';
import React, { useEffect } from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
    useEffect(() => {
        NET({
            el: '#header',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3f3fff,
            maxDistance: 18.00,
            spacing: 16.00,
            points: 15.00
        })
    }, [])

    return (

        <header className="header" id="header">
            <div className="header-wrapper inner">
                <div className="header__image">
                    <img src={ilustration} width="300" alt="Presentation illustration" title="Presentation illustration" />
                </div>
                <div className="header__presentation">
                    <h1>Hi! I'm Daniela</h1>
                    <p>I love exploring and creating</p>
                    <p>I'm a lifetime learner</p>
                </div>
                <Navbar />
            </div>
        </header>
    )
}
