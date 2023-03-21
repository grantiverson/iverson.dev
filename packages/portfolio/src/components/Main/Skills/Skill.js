import React from "react";
import PropTypes from "prop-types";

const Skills = ({ img, skill }) => (
    <div className="skills__item">
        <img className="skills__img" src={img} alt={skill} />
        <p>{skill}</p>
    </div>
);

Skills.propTypes = {
    img: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
};

export default Skills;
