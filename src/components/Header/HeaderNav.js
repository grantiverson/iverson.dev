import React from "react";
import PropTypes from "prop-types";

import { HeaderLink } from ".";

const HeaderNav = ({ showNav }) => {
    const links = ["About", "Projects", "Skills", "Contact"];

    return (
        <nav className="header__nav" style={showNav ? { marginTop: 0 } : null}>
            <ul className="header__links">
                {links.map((link, i) => (
                    <HeaderLink {...{ link }} key={i} />
                ))}
            </ul>
        </nav>
    );
};

HeaderNav.propTypes = {
    showNav: PropTypes.bool.isRequired,
};

export default HeaderNav;
