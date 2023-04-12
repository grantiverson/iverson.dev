import React from "react";
import { render } from "@testing-library/react";

import File from "./File";

describe(`<File />`, () => {
    it("renders component", () => {
        render(<File />);

        const element = document.querySelector(".fa-file");

        expect(element.tagName).toBe("svg");
        expect(element).toHaveClass("svg-inline--fa");
    });
});
