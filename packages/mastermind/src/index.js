import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./redux";

import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider {...{ store }}>
        <App />
    </Provider>,
);
