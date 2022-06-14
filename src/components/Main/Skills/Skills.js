import React from "react";

import Images from "../../../images";

import SkillsCategory from "./SkillsCategory";

import "./Skills.scss";

const Skills = () => {
    const categories = [
        {
            category: "Markup",
            skills: [
                { skill: "HTML5", img: Images.html },
                { skill: "JSX", img: Images.react },
                // { skill: "Twig", img: Images.twig },
            ],
        },
        {
            category: "Styles",
            skills: [
                { skill: "CSS3", img: Images.css },
                { skill: "Sass", img: Images.sass },
            ],
        },
        {
            category: "JavaScript",
            skills: [
                { skill: "JavaScript", img: Images.javascript },
                { skill: "jQuery", img: Images.jQuery },
                { skill: "React", img: Images.react },
                // { skill: "Redux", img: Images.redux },
                { skill: "React Router", img: Images.reactRouter },
                // { skill: "amCharts", img: Images.amcharts },
            ],
        },
        {
            category: "Build Tools",
            skills: [
                // { skill: "Webpack", img: Images.webpack },
                { skill: "NPM", img: Images.npm },
                { skill: "Gulp", img: Images.gulp },
                { skill: "ESLint", img: Images.eslint },
            ],
        },
        {
            category: "Other",
            skills: [
                { skill: "GitHub", img: Images.github },
                // { skill: "Sentry", img: Images.sentry },
                { skill: "Photoshop", img: Images.photoshop },
                { skill: "Mathematics", img: Images.math },
                { skill: "Spanish", img: Images.spanish },
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
