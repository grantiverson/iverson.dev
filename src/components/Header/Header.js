import React, { useState } from "react";

import { Bars } from "../icons/solid";
import { HeaderLink } from ".";

import "./Header.scss";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const links = ["About", "Projects", "Skills", "Contact"];

    return (
        <header className="header">
            <span
                className="header__button"
                onClick={() => setShowNav(!showNav)}
            >
                <Bars />
            </span>

            <nav
                className="header__nav"
                style={showNav ? { marginTop: 0 } : null}
            >
                <ul className="header__links">
                    {links.map((link, i) => (
                        <HeaderLink {...{ link }} key={i} />
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
