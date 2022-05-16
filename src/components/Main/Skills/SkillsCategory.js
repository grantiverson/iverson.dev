import React from "react";
import PropTypes from "prop-types";

import { Skill } from ".";

const Skills = ({ category, skills }) => (
    <div className="skills__category fade-item">
        <h4 className="skills__category-title">{category}</h4>
        <div className="skills__items-container">
            {skills.map((skill, i) => (
                <Skill {...skill} key={i} />
            ))}
        </div>
    </div>
);

Skills.propTypes = {
    category: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
};

export default Skills;
