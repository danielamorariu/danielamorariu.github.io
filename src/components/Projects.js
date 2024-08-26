import NET from "vanta/src/vanta.net";
import React, { useEffect } from "react";

export const Projects = () => {

    useEffect(() => {
        NET({
            el: '#projects',
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
        <div className="projects" id="projects">
            <div className="projects-wrapper inner">
                <h2>Projects</h2>
                <div className="ring-wrapper">
                    <div className="ring">
                        <p>Work in progress...</p>
                        <span></span>
                    </div>
                </div>
                <div className="projects__list">
                    <div className="projects__item projects__item--shop">
                        <div className="projects__item-content">
                            <h3>Natural Drop</h3>
                            <p>Project description: Mattis est vehicula eu eleifend blandit torquent porttitor pretium fusce sollicitudin justo et aliquet sagittis inceptos sed</p>
                            <p>React + Bootstrap</p>
                            <p>E-commerce style</p>
                            <button className="projects__item-button">To project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
