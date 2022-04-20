import React from "react";

import "./Footer.scss";

const Footer = () => (
    <footer>
        {/* eslint-disable-next-line */}
        <a href="#" id="back-to-top-button" className="button fade-item">
            Back to top
        </a>
        <div id="footer-text">
            <p>&copy; {new Date().getFullYear()}</p>
            <p className="vert-bar">|</p>
            <p>
                <a href="#contact">Grant Iverson</a>
            </p>
            <p className="vert-bar">|</p>
            <p>
                <a href="mailto:iversonga@gmail.com">
                    <span className="contact-text">iversonga@gmail.com</span>
                </a>
            </p>
            <p className="vert-bar">|</p>
            <p>
                <a href="sms:1-704-433-0293">
                    <span className="contact-text">704.433.0293</span>
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;
