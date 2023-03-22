import React from "react";
import { render } from "@testing-library/react";

import Phone from "./Phone";

describe(`<Phone />`, () => {
    it("renders component", () => {
        render(<Phone />);

        const element = document.querySelector(".fa-phone");

        expect(element.tagName).toBe("svg");
        expect(element).toHaveClass("svg-inline--fa");
    });
});
