import React from "react";
import { render, screen } from "@testing-library/react";

import * as images from "../../../images";

import SkillsCategory from "./SkillsCategory";

const category = "Build Tools";
const skills = [
    { skill: "NPM", src: images.npm },
    { skill: "Gulp", src: images.gulp },
    { skill: "ESLint", src: images.eslint },
];

describe(`<SkillsCategory category="..." skills={[]} />`, () => {
    it("renders element", () => {
        render(<SkillsCategory {...{ category, skills }} />);

        expect(document.querySelector(".skills__category")).toBeInTheDocument();
        expect(screen.getByText(category)).toHaveClass(
            "skills__category-title",
        );
        expect(document.querySelectorAll(".skills__item")).toHaveLength(
            skills.length,
        );
    });
});
