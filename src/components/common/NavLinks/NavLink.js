import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavLink = ({ active, onClick, text }) => {
    const className = classNames(
        "nav-links__link-text",
        active === text && "nav-links__link-text--active"
    );

    return (
        <li className="nav-links__link">
            <span
                {...{
                    className,
                    // onClick
                }}
                role="link"
            >
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
