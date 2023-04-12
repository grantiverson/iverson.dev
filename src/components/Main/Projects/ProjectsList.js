import React from "react";
import PropTypes from "prop-types";

import constants from "../../../core/constants";

import * as images from "../../../images";
import Project from "./Project";

const { ProjectTypes } = constants.ENUMS;

export const projects = [
    {
        description: `I was playing mastermind with my son and thought, "I wonder if I can code this game?" So, I gave it a shot!`,
        repositoryUrl: "https://github.com/grantiverson/mastermind",
        ss: "https://placekitten.com/500/333",
        technologies: [ProjectTypes.REACT],
        title: "Mastermind Game",
        url: "https://grantiverson.github.io/mastermind/",
    },
    {
        description:
            "React-powered app that allows users to find restaurants that serve the best vegetarian food. Asynchronous API requests to Google Maps and Yelp display the best content.",
        repositoryUrl: "https://github.com/grantiverson/veggie-finder",
        ss: images.veggieFinder,
        technologies: [ProjectTypes.REACT],
        title: "Veggie Finder",
        url: "https://veggie-finder.herokuapp.com/",
    },
    {
        description:
            "App inspired by classic arcade game Frogger built with OOJS and HTML5 Canvas. Wrote all code to control character movement, check for collisions, and keep track of score and lives.",
        repositoryUrl: "https://github.com/grantiverson/arcade-game",
        ss: images.arcadeGame,
        technologies: [ProjectTypes.JAVASCRIPT],
        title: "Arcade Game",
        url: "https://iverson.io/projects/arcade-game/",
    },
    {
        description:
            "Memory matching game uses JavaScript to manipulate the DOM. JS generates and shuffles cards, handles clicks, checks for matches, calculates score, and runs timer.",
        repositoryUrl: "https://github.com/grantiverson/concentration",
        ss: images.concentration,
        technologies: [ProjectTypes.HTML_CSS, ProjectTypes.JAVASCRIPT],
        title: "Concentration Game",
        url: "https://iverson.io/projects/concentration/",
    },
    {
        description:
            "Working solar system model uses OOJS and HTML5 Canvas. Mathematical parametric formulas control the movement of the various planets and moon.",
        repositoryUrl: "https://github.com/grantiverson/solar-system",
        ss: images.solarSystem,
        technologies: [ProjectTypes.JAVASCRIPT, ProjectTypes.MATH],
        title: "Solar System Model",
        url: "https://iverson.io/projects/solar-system/",
    },
    {
        description:
            "I got the idea for this program from a math textbook. It gave a set of steps for generating Sierpinski's triangle by hand using probability. I did it with code instead.",
        repositoryUrl: "https://github.com/grantiverson/sierpinski",
        ss: images.sierpinski,
        technologies: [ProjectTypes.JAVASCRIPT, ProjectTypes.MATH],
        title: "Sierpinski's Triangle",
        url: "https://iverson.io/projects/sierpinski/",
    },
];

const ProjectsList = ({ showProjects }) => (
    <div className="projects__list">
        {projects
            .filter(
                (project) =>
                    showProjects === ProjectTypes.ALL ||
                    project.technologies.includes(showProjects),
            )
            .map((project, key) => (
                <Project {...project} {...{ key }} />
            ))}
    </div>
);

ProjectsList.propTypes = {
    showProjects: PropTypes.number.isRequired,
};

export default ProjectsList;
