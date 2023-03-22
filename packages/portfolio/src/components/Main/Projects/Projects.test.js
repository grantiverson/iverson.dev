import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import constants from "../../../core/constants";

import Projects from "./Projects";

const { ProjectTypes } = constants.ENUMS;
const { ALL, HTML_CSS, JAVASCRIPT, REACT } = ProjectTypes;

describe(`<Projects />`, () => {
    it("renders element", () => {
        render(<Projects />);

        expect(document.querySelector("section")).toHaveClass("projects");
        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByRole("navigation")).toHaveClass("nav-links");
        expect(document.querySelector(".projects__list")).toBeInTheDocument();
    });

    it("shows and hides projects when a project link is clicked", async () => {
        const user = userEvent.setup();

        render(<Projects />);

        expect(document.querySelectorAll(".project")).toHaveLength(6);

        await user.click(screen.getByText(ProjectTypes[HTML_CSS]));

        expect(document.querySelectorAll(".project")).toHaveLength(1);

        await user.click(screen.getByText(ProjectTypes[JAVASCRIPT]));

        expect(document.querySelectorAll(".project")).toHaveLength(4);

        await user.click(screen.getByText(ProjectTypes[REACT]));

        expect(document.querySelectorAll(".project")).toHaveLength(2);

        await user.click(screen.getByText(ProjectTypes[ALL]));

        expect(document.querySelectorAll(".project")).toHaveLength(6);
    });
});
