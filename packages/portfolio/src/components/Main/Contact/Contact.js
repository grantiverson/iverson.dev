import React from "react";

import { GitHub, LinkedIn } from "../../common/FontAwesome/brands";
import { Envelope, File } from "../../common/FontAwesome/regular";
import { Phone } from "../../common/FontAwesome/solid";

import "./Contact.scss";

const Contact = () => (
    <section id="contact" className="contact light-page">
        <h3>Contact</h3>
        <p className="contact__content">
            If you are interested in creating a web presence, or are looking to
            hire a developer, contact me at the information below.
        </p>
        <div className="contact__links">
            <div className="contact__icons">
                <p>
                    <Envelope />
                </p>
                <p>
                    <Phone />
                </p>
                <p>
                    <LinkedIn />
                </p>
                <p>
                    <GitHub />
                </p>
                <p>
                    <File />
                </p>
            </div>
            <div className="contact__info">
                <a href="mailto:iversonga@gmail.com">
                    <p>iversonga@gmail.com</p>
                </a>
                <a href="tel:1-704-433-0293">
                    <p>704.433.0293</p>
                </a>
                <a
                    href="https://www.linkedin.com/pub/grant-iverson/29/247/284"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>LinkedIn</p>
                </a>
                <a
                    href="https://github.com/grantiverson"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>GitHub</p>
                </a>
                <a
                    href="https://drive.google.com/file/d/10rkFYTW0kT7WOM54zWzGYimWr-g2T3Ak/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    download
                >
                    <p>Resume</p>
                </a>
            </div>
        </div>
    </section>
);

export default Contact;
