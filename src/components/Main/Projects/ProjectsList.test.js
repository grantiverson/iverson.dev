import React from "react";
import { render } from "@testing-library/react";

import constants from "../../../core/constants";

import ProjectList, { projects } from "./ProjectsList";

const { ProjectTypes } = constants.ENUMS;
const projectTypes = [
    ProjectTypes.ALL,
    ProjectTypes.HTML_CSS,
    ProjectTypes.JAVASCRIPT,
    ProjectTypes.REACT,
];

projectTypes.forEach((projectType) => {
    describe(`<ProjectList showProjects={${projectType}} />`, () => {
        it("renders element", () => {
            render(<ProjectList showProjects={projectType} />);

            const visibleProjects = projects.filter(
                (project) =>
                    projectType === ProjectTypes.ALL ||
                    project.technologies.includes(projectType),
            );

            expect(
                document.querySelector(".projects__list"),
            ).toBeInTheDocument();
            expect(document.querySelectorAll(".project")).toHaveLength(
                visibleProjects.length,
            );
        });
    });
});
