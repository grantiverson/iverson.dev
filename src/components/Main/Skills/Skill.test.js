import React from "react";
import { render, screen } from "@testing-library/react";

import * as images from "../../../images";

import Skill from "./Skill";

describe(`<Skill skill="..." src="..." />`, () => {
    it("renders element", () => {
        render(<Skill skill="HTML" src={images.html} />);

        expect(document.querySelector(".skills__item")).toBeInTheDocument();
        expect(screen.getByRole("img").alt).toBe("HTML");
        expect(screen.getByRole("img").getAttribute("src")).toBe(images.html);
        expect(screen.getByText("HTML"));
    });
});
