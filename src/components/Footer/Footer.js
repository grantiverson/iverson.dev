import React from "react";

import "./Footer.scss";

const Footer = () => {
    const onClick = () =>
        document.querySelector(".header").scrollIntoView({
            behavior: "smooth",
        });

    return (
        <footer className="footer">
            <button
                className="footer__back-to-top-button fade-item"
                {...{ onClick }}
            >
                Back to top
            </button>
            <p className="footer__text">
                &copy; {new Date().getFullYear()} | Grant Iverson
            </p>
        </footer>
    );
};

export default Footer;
