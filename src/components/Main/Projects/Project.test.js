import React from "react";
import { render, screen } from "@testing-library/react";

import constants from "../../../core/constants";

import { projects } from "./ProjectsList";
import Project from "./Project";

const { ProjectTypes } = constants.ENUMS;

describe(`<Project />`, () => {
    projects.forEach((project) => {
        it("renders element", () => {
            render(<Project {...project} />);

            expect(document.querySelector(".project")).toBeInTheDocument();
            expect(
                screen
                    .getAllByRole("link")[0]
                    .href.replace("http://localhost/", ""),
            ).toBe(project.url);
            expect(screen.getAllByRole("img")[0].getAttribute("src")).toBe(
                project.ss,
            );
            expect(screen.getAllByRole("img")[0].alt).toBe(project.title);
            expect(screen.getByText(project.title)).toHaveClass(
                "project__title",
            );
            expect(screen.getByText(project.description)).toBeInTheDocument();
            expect(
                document.querySelectorAll(".project__technology"),
            ).toHaveLength(
                project.technologies.reduce(
                    // HTML/CSS projects add two icons, 1 for all other projects
                    (acc, x) => acc + (x === ProjectTypes.HTML_CSS ? 2 : 1),
                    0,
                ),
            );
            expect(screen.getAllByRole("link")[1].href).toBe(
                project.repositoryUrl,
            );
        });
    });
});
