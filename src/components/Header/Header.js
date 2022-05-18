import React, { useState } from "react";

import NavLinks from "../common/NavLinks";
import { Bars } from "../common/FontAwesome/solid";

import "./Header.scss";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const handleClick = (text) =>
        document.querySelector(`.${text}`).scrollIntoView({
            behavior: "smooth",
        });
    const links = [
        { text: "About", onClick: () => handleClick("about") },
        { text: "Projects", onClick: () => handleClick("projects") },
        { text: "Skills", onClick: () => handleClick("skills") },
        { text: "Contact", onClick: () => handleClick("contact") },
    ];

    return (
        <header className="header">
            <span
                className="header__button"
                onClick={() => setShowNav(!showNav)}
                onKeyDown={() => {
                    setShowNav(!showNav);
                }}
                role="button"
                tabIndex={0}
            >
                <Bars />
            </span>

{/*
            <NavLinks
                {...{ links }}
                style={showNav ? { marginTop: 0 } : null}
            />
            */}
        </header>
    );
};

export default Header;
