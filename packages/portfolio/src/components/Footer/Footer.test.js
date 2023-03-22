import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Footer from "./Footer";

describe(`<Footer />`, () => {
    it("renders element", () => {
        render(<Footer />);

        expect(document.querySelector("footer")).toHaveClass("footer");
        expect(screen.getByRole("button")).toHaveTextContent("Back to top");
        expect(
            screen.getByText(`© ${new Date().getFullYear()} | Grant Iverson`),
        ).toHaveClass("footer__text");
    });

    it("scrolls onClick", async () => {
        const user = userEvent.setup();
        const scrollToMock = jest.fn();

        window.scrollTo = scrollToMock;

        render(<Footer />);

        await user.click(screen.getByRole("button"));

        expect(scrollToMock).toHaveBeenCalledTimes(1);
    });
});
