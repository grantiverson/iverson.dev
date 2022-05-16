import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe(`<Header />`, () => {
    it("renders banner", () => {
        render(<Header />);

        const banner = screen.getByRole("banner");

        expect(banner).toBeInTheDocument();
    });

    it("renders nav links", () => {
        render(<Header />);

        const navigation = screen.getByRole("navigation");
        const list = screen.getByRole("list");
        const listitems = screen.getAllByRole("listitem");

        expect(navigation).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(listitems.length).toBe(4);
    });
});
