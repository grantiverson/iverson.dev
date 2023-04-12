import React from "react";
import { render } from "@testing-library/react";

import GitHub from "./GitHub";

describe(`<GitHub />`, () => {
    it("renders component", () => {
        render(<GitHub />);

        const element = document.querySelector(".fa-github");

        expect(element.tagName).toBe("svg");
        expect(element).toHaveClass("svg-inline--fa");
    });
});
