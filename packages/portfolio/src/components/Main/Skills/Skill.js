import React from "react";
import PropTypes from "prop-types";

const Skill = ({ skill, src }) => (
    <div className="skills__item">
        <img className="skills__img" alt={skill} src={src} />
        <p>{skill}</p>
    </div>
);

Skill.propTypes = {
    skill: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default Skill;
