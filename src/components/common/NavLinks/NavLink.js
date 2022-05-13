import React from "react";
import PropTypes from "prop-types";

const NavLink = ({ text, onClick }) => {
    return (
        <li className="nav-links__link">
            <span className="nav-links__link-text" {...{ onClick }}>
                {text}
            </span>
        </li>
    );
};

NavLink.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default NavLink;
