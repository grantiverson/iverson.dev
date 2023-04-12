import React from "react";
import { render } from "@testing-library/react";

import Envelope from "./Envelope";

describe(`<Envelope />`, () => {
    it("renders component", () => {
        render(<Envelope />);

        const element = document.querySelector(".fa-envelope");

        expect(element.tagName).toBe("svg");
        expect(element).toHaveClass("svg-inline--fa");
    });
});
