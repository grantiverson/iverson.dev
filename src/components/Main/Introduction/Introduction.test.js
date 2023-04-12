import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Introduction from "./Introduction";

describe(`<Introduction />`, () => {
    it("renders element", () => {
        render(<Introduction />);

        expect(document.querySelector("section")).toHaveClass(
            "introduction dark-page",
        );
        expect(screen.getByRole("img", { name: "Logo" })).toHaveClass(
            "introduction__logo",
        );
        expect(document.querySelector(".introduction__text")).toHaveTextContent(
            `#grant-iverson {title: "Front-End Web Developer";}`,
        );
        expect(
            document.querySelector(".introduction__teaser"),
        ).toHaveTextContent(`I make web apps and solve problems.`);
    });

    it("scrolls to about section on click", async () => {
        const user = userEvent.setup();
        const mockScrollIntoView = jest.fn();

        window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

        render(
            <>
                <Introduction />
                <div className="about" />
            </>,
        );

        const button = screen.getByRole("button");

        await user.click(button);

        expect(mockScrollIntoView).toHaveBeenCalledTimes(1);
    });

    it("scrolls to about section on key press", async () => {
        const user = userEvent.setup();
        const mockScrollIntoView = jest.fn();

        window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

        render(
            <>
                <Introduction />
                <div className="about" />
            </>,
        );

        screen.getByRole("button").focus();
        await user.keyboard("{Enter}");

        expect(mockScrollIntoView).toHaveBeenCalledTimes(1);
    });
});
