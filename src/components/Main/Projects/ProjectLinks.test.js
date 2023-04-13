import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import constants from "../../../core/constants";

import ProjectLinks from "./ProjectLinks";

const { ProjectTypes } = constants.ENUMS;
const projectTypes = [
    ProjectTypes.ALL,
    ProjectTypes.HTML_CSS,
    ProjectTypes.JAVASCRIPT,
    ProjectTypes.REACT,
];

describe(`<ProjectLinks showProjects={false}, setShowProjects={() => {}} />`, () => {
    it("renders element", () => {
        render(<ProjectLinks showProjects={0} setShowProjects={() => {}} />);

        expect(screen.getByRole("navigation")).toHaveClass("nav-links");
        expect(screen.getAllByRole("link")).toHaveLength(4);
    });

    projectTypes.forEach((projectType) => {
        it(`calls setShowProjects() when "${ProjectTypes[projectType]}" link is clicked`, async () => {
            const user = userEvent.setup();
            const showProjects = projectTypes.find((x) => x !== projectType);
            const setShowProjects = jest.fn();

            render(<ProjectLinks {...{ showProjects, setShowProjects }} />);

            await user.click(screen.getByText(ProjectTypes[projectType]));

            expect(setShowProjects).toHaveBeenCalledWith(projectType);
        });
    });
});
