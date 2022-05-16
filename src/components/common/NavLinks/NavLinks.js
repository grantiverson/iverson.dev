import React from "react";
import PropTypes from "prop-types";

import { NavLink } from ".";

import "./NavLinks.scss";

const NavLinks = ({ links, style, ...rest }) => (
    <nav className="nav-links" {...{ style }}>
        <ul className="nav-links__links">
            {links.map((link, i) => (
                <NavLink {...rest} {...link} key={i} />
            ))}
        </ul>
    </nav>
);

NavLinks.propTypes = {
    links: PropTypes.array.isRequired,
    style: PropTypes.object,
};

export default NavLinks;