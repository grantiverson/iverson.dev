import React from "react";

import About from "./About";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => (
    <main className="main">
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </main>
);

export default Main;
