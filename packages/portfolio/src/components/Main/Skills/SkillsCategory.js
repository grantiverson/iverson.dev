import React from "react";
import PropTypes from "prop-types";

import Skill from "./Skill";

const SkillsCategory = ({ category, skills }) => (
    <div className="skills__category">
        <h4 className="skills__category-title">{category}</h4>
        <div className="skills__items-container">
            {skills.map((skill) => (
                <Skill {...skill} key={skill.skill} />
            ))}
        </div>
    </div>
);

SkillsCategory.propTypes = {
    category: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SkillsCategory;
