import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NavLinks from "./NavLinks";

describe(`<NavLinks />`, () => {
    it("renders nav links", () => {
        render(
            <NavLinks
                links={[
                    { text: "One", onClick: () => {} },
                    { text: "Two", onClick: () => {} },
                    { text: "Three", onClick: () => {} },
                ]}
            />,
        );

        const navigation = screen.getByRole("navigation");
        const list = screen.getByRole("list");
        const listItems = screen.getAllByRole("listitem");
        const links = screen.getAllByRole("link");

        expect(navigation).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(listItems.length).toBe(3);
        expect(links[0]).toHaveTextContent("One");
        expect(links[1]).toHaveTextContent("Two");
        expect(links[2]).toHaveTextContent("Three");
    });

    it("calls onClick", async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();
        const links = [{ text: "One", onClick }];

        render(<NavLinks {...{ links }} />);

        await user.click(screen.getByRole("link"));

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
