import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavLink = ({ active, onClick, text }) => {
    const className = classNames(
        "nav-links__link-text",
        active === text && "nav-links__link-text--active",
    );

    return (
        <li className="nav-links__link">
            <span
                {...{ className }}
                onClick={onClick}
                onKeyDown={onClick}
                role="link"
                tabIndex={0}
            >
                {text}
            </span>
        </li>
    );
};

NavLink.propTypes = {
    active: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

NavLink.defaultProps = {
    active: "",
};

export default NavLink;
