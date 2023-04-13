import React from "react";
import { render, screen } from "@testing-library/react";

import NavLinks from "./NavLinks";

const links = [
    { text: "One", onClick: () => {} },
    { text: "Two", onClick: () => {} },
    { text: "Three", onClick: () => {} },
];
const TestNavLinks = () => <NavLinks {...{ links }} />;

describe(`<NavLinks />`, () => {
    it("renders nav links", () => {
        render(<TestNavLinks />);

        const linkElements = screen.getAllByRole("link");

        expect(screen.getByRole("navigation")).toHaveClass("nav-links");
        expect(screen.getByRole("list")).toHaveClass("nav-links__links");
        expect(screen.getAllByRole("listitem").length).toBe(3);
        links.forEach((link, i) => {
            expect(linkElements[i]).toHaveTextContent(link.text);
        });
    });
});
