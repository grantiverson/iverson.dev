import React from "react";
import PropTypes from "prop-types";

import constants from "../../../core/constants";

import NavLinks from "../../common/NavLinks";

const ProjectLinks = ({ showProjects, setShowProjects }) => {
    const { ProjectTypes } = constants.ENUMS;
    const links = [
        {
            text: ProjectTypes[ProjectTypes.ALL],
            onClick: () => setShowProjects(ProjectTypes.ALL),
        },
        {
            text: ProjectTypes[ProjectTypes.HTML_CSS],
            onClick: () => setShowProjects(ProjectTypes.HTML_CSS),
        },
        {
            text: ProjectTypes[ProjectTypes.JAVASCRIPT],
            onClick: () => setShowProjects(ProjectTypes.JAVASCRIPT),
        },
        {
            text: ProjectTypes[ProjectTypes.REACT],
            onClick: () => setShowProjects(ProjectTypes.REACT),
        },
    ];

    return <NavLinks active={ProjectTypes[showProjects]} {...{ links }} />;
};

ProjectLinks.propTypes = {
    showProjects: PropTypes.number.isRequired,
    setShowProjects: PropTypes.func.isRequired,
};

export default ProjectLinks;
