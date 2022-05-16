import React, { useState } from "react";

import constants from "../../../core/constants";

import { ProjectLinks, ProjectsList } from ".";

import "./Projects.scss";

const Projects = () => {
    const { ProjectTypes } = constants.ENUMS;
    const [showProjects, setShowProjects] = useState(ProjectTypes.ALL);

    return (
        <section className="projects dark-page">
            <h3>Projects</h3>

            <ProjectLinks {...{ showProjects, setShowProjects }} />

            <ProjectsList {...{ showProjects }} />
        </section>
    );
};

export default Projects;
