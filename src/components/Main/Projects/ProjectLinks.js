import React from "react";
import PropTypes from "prop-types";

import constants from "../../../core/constants";

import NavLinks from "../../common/NavLinks";

const ProjectLinks = ({ showProjects, setShowProjects }) => {
    const { ProjectTypes } = constants.ENUMS;
    const links = [
        { text: "All", onClick: () => setShowProjects(ProjectTypes.ALL) },
        {
            text: "HTML/CSS",
            onClick: () => setShowProjects(ProjectTypes["HTML/CSS"]),
        },
        {
            text: "JavaScript",
            onClick: () => setShowProjects(ProjectTypes.JavaScript),
        },
        { text: "React", onClick: () => setShowProjects(ProjectTypes.REACT) },
    ];

    return <NavLinks active={ProjectTypes[showProjects]} {...{ links }} />;
};

ProjectLinks.propTypes = {
    showProjects: PropTypes.number.isRequired,
    setShowProjects: PropTypes.func.isRequired,
};

export default ProjectLinks;
