import React from "react";
import { render } from "@testing-library/react";
import { PropTypes } from "prop-types";
import { Provider } from "react-redux";

import store from "../../redux";

import Board from ".";

const ReduxProvider = ({ children }) => (
    <Provider {...{ store }}>{children}</Provider>
);

ReduxProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const customRender = (ui, options) =>
    render(ui, { wrapper: ReduxProvider, ...options });

describe(`<Board />`, () => {
    it("renders component", () => {
        customRender(<Board />);

        expect(document.querySelector(".board")).toBeInTheDocument();
        expect(document.querySelectorAll(".row")).toHaveLength(10);
        expect(document.querySelectorAll(".hint")).toHaveLength(40);
        expect(document.querySelectorAll(".piece")).toHaveLength(40);
    });
});
