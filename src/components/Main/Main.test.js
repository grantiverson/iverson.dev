import React from "react";
import { render } from "@testing-library/react";

import Main from "./Main";

describe(`<Main />`, () => {
    it("renders element", () => {
        render(<Main />);

        const sections = document.querySelectorAll("section");

        expect(document.querySelector("main")).toHaveClass("main");
        expect(sections).toHaveLength(5);
        expect(sections[0]).toHaveClass("introduction");
        expect(sections[1]).toHaveClass("about");
        expect(sections[2]).toHaveClass("projects");
        expect(sections[3]).toHaveClass("skills");
        expect(sections[4]).toHaveClass("contact");
    });
});
