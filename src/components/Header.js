import ilustration from "../assets/img/image-profil-1.svg";
import NET from 'vanta/src/vanta.net';
import { useEffect } from "react";

export const Header = () => {
    useEffect(() => {
        NET({
            el: '#vanta',
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

        <header className="header" id="vanta">
            <div className="header-wrapper inner">
                <div className="header__image">
                    <img src={ilustration} width="300" alt="Presentation illustration" title="Presentation illustration" />
                </div>
                <div className="header__presentation">
                    <h1>Hi! I'm Daniela</h1>
                    <span>Enim quam diam dolor nulla habitasse per auctor fusce odio fringilla si rhoncus lectus ante lorem quisque sed sagittis</span>
                </div>
            </div>
            <div className="header__cta">
                <span></span>
            </div>
        </header>
    )
}
