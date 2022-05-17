import React from "react";
import PropTypes from "prop-types";

import constants from "../../../core/constants";

import Images from "../../../images";
import { Project } from ".";

const Projects = ({ showProjects }) => {
    const { ProjectTypes } = constants.ENUMS;

    const projects = [
        {
            description: `I was playing mastermind with my son and thought, "I wonder if I can code this game?" So, I gave it a shot!`,
            repositoryUrl: "#",
            ss: "https://placekitten.com/500/333",
            technologies: [ProjectTypes.REACT],
            title: "Mastermind Game",
            url: "#",
        },
        {
            description:
                "React-powered app that allows users to find restaurants that serve the best vegetarian food. Asynchronous API requests to Google Maps and Yelp display the best content.",
            repositoryUrl: "https://github.com/grantiverson/veggie-finder",
            ss: Images.veggieFinder,
            technologies: [ProjectTypes.REACT],
            title: "Veggie Finder",
            url: "https://veggie-finder.herokuapp.com",
        },
        {
            description:
                "App inspired by classic arcade game Frogger built with OOJS and HTML5 Canvas. Wrote all code to control character movement, check for collisions, and keep track of score and lives.",
            repositoryUrl: "https://github.com/grantiverson/arcade-game",
            ss: Images.arcadeGame,
            technologies: [ProjectTypes.JavaScript],
            title: "Arcade Game",
            url: "https://iverson.io/projects/arcade-game",
        },
        {
            description:
                "Memory matching game uses JavaScript to manipulate the DOM. JS generates and shuffles cards, handles clicks, checks for matches, calculates score, and runs timer.",
            repositoryUrl: "https://github.com/grantiverson/concentration",
            ss: Images.concentration,
            technologies: [ProjectTypes["HTML/CSS"], ProjectTypes.JavaScript],
            title: "Concentration Game",
            url: "https://iverson.io/projects/concentration",
        },
        {
            description:
                "Working solar system model uses OOJS and HTML5 Canvas. Mathematical parametric formulas control the movement of the various planets and moon.",
            repositoryUrl: "https://github.com/grantiverson/solar-system",
            ss: Images.solarSystem,
            technologies: [ProjectTypes.JavaScript, ProjectTypes.MATH],
            title: "Solar System Model",
            url: "https://iverson.io/projects/solar-system",
        },
        {
            description:
                "I got the idea for this program from a math textbook. It gave a set of steps for generating Sierpinski's triangle by hand using probability. I did it with code instead.",
            repositoryUrl: "https://github.com/grantiverson/sierpinski",
            ss: Images.sierpinski,
            technologies: [ProjectTypes.JavaScript, ProjectTypes.MATH],
            title: "Sierpinski's Triangle",
            url: "https://iverson.io/projects/sierpinski",
        },
    ];

    return (
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
};

Projects.propTypes = {
    showProjects: PropTypes.number.isRequired,
};

export default Projects;
