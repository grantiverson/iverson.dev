import React from "react";
import { render } from "@testing-library/react";

import LinkedIn from "./LinkedIn";

describe(`<LinkedIn />`, () => {
    it("renders component", () => {
        render(<LinkedIn />);

        const element = document.querySelector(".fa-linkedin");

        expect(element.tagName).toBe("svg");
        expect(element).toHaveClass("svg-inline--fa");
    });
});
