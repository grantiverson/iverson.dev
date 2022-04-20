import React from "react";

import NavButton from "../../images/navButton.png";

import "./Header.scss";

const Header = () => (
    <header>
        <img
            alt="Navigation Button"
            height="48"
            id="nav-button"
            src={NavButton}
        />
        <nav id="main-nav">
            <ul>
                <li>
                    <a href="#about" id="about-main-nav">
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects" id="projects-main-nav">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#skills" id="about-main-nav">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#contact" id="contact-main-nav">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
        <nav id="mini-nav">
            <ul>
                <li>
                    <a href="#about" id="about-mini-nav">
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects" id="projects-mini-nav">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#skills" id="about-mini-nav">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#contact" id="contact-mini-nav">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
