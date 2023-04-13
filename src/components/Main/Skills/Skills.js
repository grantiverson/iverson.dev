import React from "react";

import * as images from "../../../images";

import SkillsCategory from "./SkillsCategory";

import "./Skills.scss";

const Skills = () => {
    const categories = [
        {
            category: "Markup",
            skills: [
                { skill: "HTML5", src: images.html },
                { skill: "JSX", src: images.react },
                { skill: "Twig", src: images.twig },
            ],
        },
        {
            category: "Styles",
            skills: [
                { skill: "CSS3", src: images.css },
                { skill: "Sass", src: images.sass },
            ],
        },
        {
            category: "JavaScript",
            skills: [
                { skill: "amCharts", src: images.amCharts },
                { skill: "JavaScript", src: images.javascript },
                { skill: "jQuery", src: images.jQuery },
                { skill: "React", src: images.react },
                { skill: "React Router", src: images.reactRouter },
                { skill: "Redux", src: images.redux },
            ],
        },
        {
            category: "Build Tools",
            skills: [
                { skill: "ESLint", src: images.eslint },
                { skill: "Gulp", src: images.gulp },
                { skill: "Lerna", src: images.lerna },
                { skill: "NPM", src: images.npm },
                { skill: "Nx", src: images.nx },
                { skill: "Prettier", src: images.prettier },
                { skill: "Stylelint", src: images.stylelint },
                { skill: "Webpack", src: images.webpack },
            ],
        },
        {
            category: "Other",
            skills: [
                { skill: "GitHub", src: images.github },
                { skill: "Mathematics", src: images.math },
                { skill: "Photoshop", src: images.photoshop },
                { skill: "Sentry", src: images.sentry },
                { skill: "Spanish", src: images.spanish },
            ],
        },
    ];

    return (
        <section className="skills light2-page">
            <h3>Skills</h3>
            <div className="skills__list">
                {categories.map((category) => (
                    <SkillsCategory {...category} key={category.category} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
