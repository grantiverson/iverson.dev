import React, { useState } from "react";

import constants from "../../../core/constants";

import { Project, ProjectLinks, ProjectsList } from ".";

import "./Projects.scss";

const Projects = () => {
    const { ProjectTypes } = constants.ENUMS;
    const [showProjects, setShowProjects] = useState(ProjectTypes.ALL);

    return (
        <section id="projects" className="dark-page">
            <h3 className="fade-item">Projects</h3>

            <ProjectLinks {...{ showProjects, setShowProjects }} />

            <ProjectsList {...{ showProjects }} />
        </section>
    );
};

export default Projects;
