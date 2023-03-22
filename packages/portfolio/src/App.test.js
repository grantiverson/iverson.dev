import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe(`<App />`, () => {
    it("renders component", () => {
        render(<App />);

        expect(document.querySelector(".App")).toBeInTheDocument();
        expect(document.querySelector(".header")).toBeInTheDocument();
        expect(document.querySelector(".main")).toBeInTheDocument();
        expect(document.querySelector(".footer")).toBeInTheDocument();
    });
});
