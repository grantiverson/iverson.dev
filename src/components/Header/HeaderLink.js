import React from "react";

const Header = ({ link }) => {
    const onClick = () =>
        document.querySelector(`#${link.toLowerCase()}`).scrollIntoView({
            behavior: "smooth",
        });

    return (
        <li className="header__link">
            <span className="header__link-text" {...{ onClick }}>
                {link}
            </span>
        </li>
    );
};

export default Header;
