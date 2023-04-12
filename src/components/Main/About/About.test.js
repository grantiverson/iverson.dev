import React from "react";
import { render, screen } from "@testing-library/react";

import About from "./About";

describe(`<About />`, () => {
    it("renders element", () => {
        render(<About />);

        expect(document.querySelector("section")).toHaveClass("about");
        expect(screen.getByRole("heading")).toHaveTextContent("About");
        expect(document.querySelector(".about__content")).toBeInTheDocument();
    });
});
