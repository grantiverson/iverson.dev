import React from "react";

import Arrow from "../../../images/arrow.png";
import Logo from "../../../images/logo.png";

import "./Introduction.scss";

const Introduction = () => {
    const onClick = () =>
        document.querySelector(".about").scrollIntoView({ behavior: "smooth" });

    return (
        <section className="introduction dark-page">
            <div className="introduction__content fade-item">
                <img className="introduction__logo" src={Logo} alt="Logo" />
                <div className="introduction__text">
                    <h1>
                        #grant-iverson{" "}
                        <span className="introduction__color-white">
                            &#123;
                        </span>
                    </h1>
                    <h2 className="introduction__title">
                        title:{" "}
                        <span className="introduction__color-green">
                            &quot;Front-End Web Developer&quot;
                        </span>
                        ;
                    </h2>
                    <h2>&#125;</h2>
                </div>
            </div>
            <div className="introduction__teaser">
                <p>I make web apps and solve problems.</p>
                <img
                    className="introduction__arrow"
                    src={Arrow}
                    alt="Arrow"
                    {...{ onClick }}
                />
            </div>
        </section>
    );
};

export default Introduction;
