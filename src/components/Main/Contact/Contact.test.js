import React from "react";
import { render, screen } from "@testing-library/react";

import Contact from "./Contact";

describe(`<Contact />`, () => {
    it("renders element", () => {
        render(<Contact />);

        expect(document.querySelector("section")).toHaveClass("contact");
        expect(screen.getByRole("heading")).toHaveTextContent("Contact");
        expect(document.querySelector(".contact__content")).toBeInTheDocument();
        expect(document.querySelector(".contact__links")).toBeInTheDocument();
        expect(document.querySelectorAll("svg")).toHaveLength(5);
        expect(screen.getAllByRole("link")).toHaveLength(5);
    });
});
