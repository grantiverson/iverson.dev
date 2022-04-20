import React from "react";

import Arrow from "../../images/arrow.png";
import Logo from "../../images/logo.png";

import "./Introduction.scss";

const Introduction = () => (
    <section id="introduction" className="dark-page">
        <div id="introduction-content" className="fade-item">
            <img id="logo" src={Logo} alt="Logo" />
            <div id="introduction-text">
                <h1>
                    #grant-iverson{" "}
                    <span className="light-text-span">&#123;</span>
                </h1>
                <h2 id="title">
                    title:{" "}
                    <span className="css-value-text-span">
                        "Front-End Web Developer"
                    </span>
                    ;
                </h2>
                <h2>&#125;</h2>
            </div>
        </div>
        <div id="teaser">
            <p>I make web apps and solve problems.</p>
            <a href="#about">
                <img id="arrow" src={Arrow} alt="Arrow" />
            </a>
        </div>
    </section>
);

export default Introduction;
