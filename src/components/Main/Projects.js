import React from "react";

import ArcadeGame from "../../images/projects-arcade-game.jpg";
import Concentration from "../../images/projects-concentration.jpg";
import Sierpinski from "../../images/projects-sierpinski.jpg";
import SolarSystem from "../../images/projects-solar-system.jpg";
import VeggieFinder from "../../images/projects-veggie-finder.jpg";
import CSS3 from "../../images/skills-css3.png";
import HTML5 from "../../images/skills-html5.png";
import JavaScript from "../../images/skills-javascript.png";
import Math from "../../images/skills-math.png";
import _React from "../../images/skills-react.png";
import { GitHub } from "../icons/brands";

import "./Projects.scss";

const Projects = () => (
    <section id="projects" className="dark-page">
        <h3 className="fade-item">Projects</h3>
        <div id="projects-selector" className="fade-item">
            <ul>
                <li>
                    <a
                        href=".all-projects"
                        id="all-selector"
                        className="active"
                    >
                        All
                    </a>
                </li>
                <li>
                    <a href=".html-css-projects" id="html-css-selector">
                        HTML/CSS
                    </a>
                </li>
                <li>
                    <a href=".javascript-projects" id="javascript-selector">
                        JavaScript
                    </a>
                </li>
                <li>
                    <a href=".react-projects" id="react-selector">
                        React
                    </a>
                </li>
            </ul>
        </div>

        <div id="projects-container">
            {/*
            <div className="projects-item fade-item all-projects html-css-projects javascript-projects react-projects">
                <a href="#" target="_blank" rel="noreferrer">
                    <img className="projects-img" src="#" alt="Mastermind" />
                    <div className="projects-item-details">
                        <h4 className="projects-item-title">Mastermind</h4>
                        <p>
                            I was playing mastermind with my son and thought, "I
                            wonder if I can code this game?" So, I gave it a
                            shot!
                        </p>
                    </div>
                    <div className="projects-skills-img-container">
                        <img
                            className="projects-skills-img"
                            src={_React}
                            alt="React"
                        />
                        <img
                            className="projects-skills-img"
                            src={HTML5}
                            alt="HTML5"
                        />
                        <img
                            className="projects-skills-img"
                            src={CSS3}
                            alt="CSS3"
                        />
                        <img
                            className="projects-skills-img"
                            src={JavaScript}
                            alt="JavaScript"
                        />
                    </div>
                </a>
                <a
                    className="projects-skills-github"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHub />
                </a>
            </div>
            */}

            <div className="projects-item fade-item all-projects html-css-projects javascript-projects react-projects">
                <a
                    href="https://veggie-finder.herokuapp.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="projects-img"
                        src={VeggieFinder}
                        alt="Veggie Finder"
                    />
                    <div className="projects-item-details">
                        <h4 className="projects-item-title">Veggie Finder</h4>
                        <p>
                            React-powered app that allows users to find
                            restaurants that serve the best vegetarian food.
                            Asynchronous API requests to Google Maps and Yelp
                            display the best content.
                        </p>
                    </div>
                    <div className="projects-skills-img-container">
                        <img
                            className="projects-skills-img"
                            src={_React}
                            alt="React"
                        />
                        <img
                            className="projects-skills-img"
                            src={HTML5}
                            alt="HTML5"
                        />
                        <img
                            className="projects-skills-img"
                            src={CSS3}
                            alt="CSS3"
                        />
                        <img
                            className="projects-skills-img"
                            src={JavaScript}
                            alt="JavaScript"
                        />
                    </div>
                </a>
                <a
                    className="projects-skills-github"
                    href="https://github.com/grantiverson/veggie-finder"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHub />
                </a>
            </div>

            <div className="projects-item fade-item all-projects javascript-projects">
                <a
                    href="https://iverson.io/projects/arcade-game"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="projects-img"
                        src={ArcadeGame}
                        alt="Arcade Game Screenshot"
                    />
                    <div className="projects-item-details">
                        <h4 className="projects-item-title">Arcade Game</h4>
                        <p>
                            App inspired by classic arcade game Frogger built
                            with OOJS and HTML5 Canvas. Wrote all code to
                            control character movement, check for collisions,
                            and keep track of score and lives.
                        </p>
                    </div>
                    <div className="projects-skills-img-container">
                        <img
                            className="projects-skills-img"
                            src={JavaScript}
                            alt="JavaScript"
                        />
                    </div>
                </a>
                <a
                    className="projects-skills-github"
                    href="https://github.com/grantiverson/arcade-game"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHub />
                </a>
            </div>

            <div className="projects-item fade-item all-projects html-css-projects javascript-projects">
                <a
                    href="https://iverson.io/projects/concentration"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="projects-img"
                        src={Concentration}
                        alt="Concentration Game Screenshot"
                    />
                    <div className="projects-item-details">
                        <h4 className="projects-item-title">
                            Concentration Game
                        </h4>
                        <p>
                            Memory matching game uses JavaScript to manipulate
                            the DOM. JS generates and shuffles cards, handles
                            clicks, checks for matches, calculates score, and
                            runs timer.
                        </p>
                    </div>
                    <div className="projects-skills-img-container">
                        <img
                            className="projects-skills-img"
                            src={HTML5}
                            alt="HTML5"
                        />
                        <img
                            className="projects-skills-img"
                            src={CSS3}
                            alt="CSS3"
                        />
                        <img
                            className="projects-skills-img"
                            src={JavaScript}
                            alt="JavaScript"
                        />
                    </div>
                </a>
                <a
                    className="projects-skills-github"
                    href="https://github.com/grantiverson/concentration"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHub />
                </a>
            </div>

            <div className="projects-item fade-item all-projects javascript-projects">
                <a
                    href="https://iverson.io/projects/solar-system"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="projects-img"
                        src={SolarSystem}
                        alt="Solar System Model Screenshot"
                    />
                    <div className="projects-item-details">
                        <h4 className="projects-item-title">
                            Solar System Model
                        </h4>
                        <p>
                            Working solar system model uses OOJS and HTML5
                            Canvas. Mathematical parametric formulas control the
                            movement of the various planets and moon.
                        </p>
                    </div>
                    <div className="projects-skills-img-container">
                        <img
                            className="projects-skills-img"
                            src={JavaScript}
                            alt="JavaScript"
                        />
                        <img
                            className="projects-skills-img"
                            src={Math}
                            alt="Math"
                        />
                    </div>
                </a>
                <a
                    className="projects-skills-github"
                    href="https://github.com/grantiverson/solar-system"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHub />
                </a>
            </div>

            <div className="projects-item fade-item all-projects javascript-projects">
                <a
                    href="https://iverson.io/projects/sierpinski"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="projects-img"
                        src={Sierpinski}
                        alt="Sierpinski's Triangle Project Screenshot"
                    />
                    <div className="projects-item-details">
                        <h4 className="projects-item-title">
                            Sierpinski's Triangle Generator
                        </h4>
                        <p>
                            I got the idea for this program from a math
                            textbook. It gave a set of steps for generating
                            Sierpinski's triangle by hand using probability. I
                            did it with code instead.
                        </p>
                    </div>
                    <div className="projects-skills-img-container">
                        <img
                            className="projects-skills-img"
                            src={JavaScript}
                            alt="JavaScript"
                        />
                        <img
                            className="projects-skills-img"
                            src={Math}
                            alt="Math"
                        />
                    </div>
                </a>
                <a
                    className="projects-skills-github"
                    href="https://github.com/grantiverson/sierpinski"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHub />
                </a>
            </div>
        </div>
    </section>
);

export default Projects;
