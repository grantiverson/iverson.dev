import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NavLink from "./NavLink";

const text = "This is some text";
const TestNavLink = (args) => (
    <NavLink onClick={() => {}} {...{ text }} {...args} />
);

describe(`<NavLink onClick={() => {}} text="..." />`, () => {
    it("renders element", () => {
        render(<TestNavLink />);

        expect(document.querySelector(".nav-links__link")).toHaveTextContent(
            text,
        );
        expect(screen.getByRole("link")).toHaveClass("nav-links__link-text");
    });

    it("calls onClick", async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<TestNavLink {...{ onClick }} />);

        await user.click(screen.getByRole("link"));

        expect(onClick).toHaveBeenCalledTimes(1);

        screen.getByRole("link").focus();
        await user.keyboard("{Enter}");

        expect(onClick).toHaveBeenCalledTimes(2);
    });
});

describe(`<NavLink active onClick={() => {}} text="..." />`, () => {
    it("renders element", () => {
        render(<TestNavLink active={text} />);

        expect(screen.getByRole("link")).toHaveClass(
            "nav-links__link-text nav-links__link-text--active",
        );
    });
});
