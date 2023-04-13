import React from "react";
import { render, screen } from "@testing-library/react";

import Skills from "./Skills";

describe(`<Skills />`, () => {
    it("renders element", () => {
        render(<Skills />);

        expect(document.querySelector("section")).toHaveClass("skills");
        expect(screen.getByText("Skills")).toBeInTheDocument();
        expect(document.querySelectorAll(".skills__category")).toHaveLength(5);
    });
});
