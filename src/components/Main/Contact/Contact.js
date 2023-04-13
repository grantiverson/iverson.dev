import React from "react";

import {
    Envelope,
    File,
    GitHub,
    LinkedIn,
    Phone,
} from "../../common/FontAwesome";

import "./Contact.scss";

const Contact = () => (
    <section id="contact" className="contact light-page">
        <h3>Contact</h3>
        <p className="contact__content">
            If you are interested in creating a web presence, or are looking to
            hire a developer, contact me at the information below.
        </p>
        <div className="contact__links">
            <p>
                <Envelope />
                <a href="mailto:iversonga@gmail.com">iversonga@gmail.com</a>
            </p>
            <p>
                <Phone />
                <a href="tel:1-704-433-0293">704.433.0293</a>
            </p>
            <p>
                <LinkedIn />
                <a
                    href="https://www.linkedin.com/pub/grant-iverson/29/247/284"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
            </p>
            <p>
                <GitHub />
                <a
                    href="https://github.com/grantiverson"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </p>
            <p>
                <File />
                <a
                    href="https://drive.google.com/file/d/10rkFYTW0kT7WOM54zWzGYimWr-g2T3Ak/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    download
                >
                    Resume
                </a>
            </p>
        </div>
    </section>
);

export default Contact;
