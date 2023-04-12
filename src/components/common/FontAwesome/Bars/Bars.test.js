import React from "react";
import { render } from "@testing-library/react";

import Bars from "./Bars";

describe(`<Bars />`, () => {
    it("renders component", () => {
        render(<Bars />);

        const element = document.querySelector(".fa-bars");

        expect(element.tagName).toBe("svg");
        expect(element).toHaveClass("svg-inline--fa");
    });
});
