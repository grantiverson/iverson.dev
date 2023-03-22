import React from "react";
import { render, screen } from "@testing-library/react";

import constants from "../../../core/constants";

import ProjectImage from "./ProjectImage";

const alt = 1;
const src = "https://iverson.dev/";

describe(`<ProjectImage alt={...} src="..." />`, () => {
    it("renders element", () => {
        render(<ProjectImage {...{ alt, src }} />);

        const img = screen.getByRole("img");

        expect(img).toHaveClass("project__technology");
        expect(img.alt).toBe(constants.ENUMS.ProjectTypes[alt]);
        expect(img.src).toBe(src);
    });
});
