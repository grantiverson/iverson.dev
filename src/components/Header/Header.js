import React, { useState } from "react";

import { Bars } from "../icons/solid";

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
                    {links.map((link) => {
                        const _link = link.toLowerCase();

                        return (
                            <li className="header__link">
                                <a href={`#${_link}`} id={`${_link}-main-nav`}>
                                    {link}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
