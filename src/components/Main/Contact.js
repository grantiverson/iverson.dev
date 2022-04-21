import React from "react";

import { GitHub, LinkedIn } from "../icons/brands";
import { Envelope, File } from "../icons/regular";
import { Phone } from "../icons/solid";

import "./Contact.scss";

const Contact = () => (
    <section id="contact" className="light-page">
        <h3 className="fade-item">Contact</h3>
        <p className="fade-item">
            If you are interested in creating a web presence, or are looking to
            hire a developer, contact me at the information below.
        </p>
        <div id="contact-info" className="fade-item">
            <div id="contact-info-icons">
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
            <div id="contact-info-text">
                <a href="mailto:iversonga@gmail.com">
                    <p>
                        <span className="contact-text">
                            iversonga@gmail.com
                        </span>
                    </p>
                </a>
                <a href="tel:1-704-433-0293">
                    <p>
                        <span className="contact-text">704.433.0293</span>
                    </p>
                </a>
                <a
                    href="https://www.linkedin.com/pub/grant-iverson/29/247/284"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>
                        <span className="contact-text">LinkedIn</span>
                    </p>
                </a>
                <a
                    href="https://github.com/grantiverson"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>
                        <span className="contact-text">GitHub</span>
                    </p>
                </a>
                <a
                    href="https://iverson.io/!Grant_Iverson-resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>
                        <span className="contact-text">Resume</span>
                    </p>
                </a>
            </div>
        </div>
    </section>
);

export default Contact;
