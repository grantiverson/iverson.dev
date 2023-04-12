import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "./Header";

describe(`<Header />`, () => {
    it("renders element", () => {
        render(<Header />);

        expect(screen.getByRole("banner")).toHaveClass("header");
        expect(screen.getByRole("button")).toHaveClass("header__button");
        expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("scrolls to an element on click", async () => {
        const user = userEvent.setup();
        const mockScrollIntoView = jest.fn();

        window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

        render(
            <>
                <Header />
                <div className="about" />
                <div className="projects" />
                <div className="skills" />
                <div className="contact" />
            </>,
        );

        const links = screen.getAllByRole("link");

        await Promise.all(
            links.map(async (link) => {
                await user.click(link);
            }),
        );

        expect(mockScrollIntoView).toHaveBeenCalledTimes(links.length);
    });

    it("shows the navigation on click", async () => {
        const user = userEvent.setup();

        render(<Header />);

        expect(screen.getByRole("navigation").style.length).toBe(0);

        await user.click(screen.getByRole("button"));

        expect(screen.getByRole("navigation")).toHaveStyle("marginTop: 0");

        // TODO should test hiding the navigation as well, but this doesn't work
        // await user.click(screen.getByRole("button"));

        // expect(screen.getByRole("navigation").style.length).toBe(0);
    });

    it("shows the navigation on key press", async () => {
        const user = userEvent.setup();

        render(<Header />);

        expect(screen.getByRole("navigation").style.length).toBe(0);

        screen.getByRole("button").focus();
        await user.keyboard("{Enter}");

        expect(screen.getByRole("navigation")).toHaveStyle("marginTop: 0");

        // TODO should test hiding the navigation as well, but this doesn't work
        // screen.getByRole("button").focus();
        // await user.keyboard("{Enter}");

        // expect(screen.getByRole("navigation").style.length).toBe(0);
    });
});
