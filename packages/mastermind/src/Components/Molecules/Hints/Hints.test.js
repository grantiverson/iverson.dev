import React from "react";
import { render } from "@testing-library/react";

import { buildHints } from "../../../utility";

import Hints from ".";

const hints = buildHints("black", null, "white", null);

describe(`<Hints />`, () => {
    it("renders component with no hints", () => {
        render(<Hints />);

        expect(document.querySelector(".hints")).toBeInTheDocument();
        expect(document.querySelector(".hint")).not.toBeInTheDocument();
    });
});

describe(`<Hints hints={[...]} />`, () => {
    it("renders with `hints`", () => {
        render(<Hints {...{ hints }} />);

        const hintElements = document.querySelectorAll(".hint");

        hints.forEach(({ color }, i) => {
            if (!color) {
                expect(hintElements[i]).toHaveClass("hint");
                expect(hintElements[i]).not.toHaveClass(
                    "hint--white",
                    "hint--black",
                );
                return;
            }

            expect(hintElements[i]).toHaveClass("hint", `hint--${color}`);
        });
    });
});
