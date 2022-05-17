import React from "react";
import PropTypes from "prop-types";

import { NavLink } from ".";

import "./NavLinks.scss";

const NavLinks = ({ links, style, ...rest }) => (
    <nav className="nav-links" {...{ style }}>
        <ul className="nav-links__links">
            {links.map((link) => (
                <NavLink {...rest} {...link} key={link.text} />
            ))}
        </ul>
    </nav>
);

NavLinks.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
        }),
    ).isRequired,
    style: PropTypes.shape(),
};

NavLinks.defaultProps = {
    style: {},
};

export default NavLinks;
