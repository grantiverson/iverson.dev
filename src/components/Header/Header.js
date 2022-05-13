import React, { useState } from "react";

import { Bars } from "../icons/solid";
import { HeaderNav } from ".";

import "./Header.scss";

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <header className="header">
            <span
                className="header__button"
                onClick={() => setShowNav(!showNav)}
            >
                <Bars />
            </span>

            <HeaderNav {...{ showNav }} />
        </header>
    );
};

export default Header;
