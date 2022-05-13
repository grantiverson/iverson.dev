import React from "react";

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
            onClick: () => setShowProjects(ProjectTypes.JS),
        },
        { text: "React", onClick: () => setShowProjects(ProjectTypes.REACT) },
    ];

    return (
        <div id="projects-selector" className="fade-item">
            <NavLinks active={ProjectTypes[showProjects]} {...{ links }} />
        </div>
    );
};

export default ProjectLinks;
