import React from "react";

import CSS3 from "../../../images/skills-css3.png";
import ESLint from "../../../images/skills-eslint.png";
import GitHub from "../../../images/skills-github.png";
import Gulp from "../../../images/skills-gulp.png";
import HTML5 from "../../../images/skills-html5.png";
import JavaScript from "../../../images/skills-javascript.png";
import jQuery from "../../../images/skills-jquery.png";
import Math from "../../../images/skills-math.png";
import NPM from "../../../images/skills-npm.png";
import Photoshop from "../../../images/skills-photoshop.png";
import _React from "../../../images/skills-react.png";
import ReactRouter from "../../../images/skills-react-router.png";
import Sass from "../../../images/skills-sass.png";
import Spanish from "../../../images/skills-spanish.png";

import "./Skills.scss";

const Skills = () => (
    /*
    TODO: Add skills
    - Redux
    - amCharts
    - Webpack
    - moment
    - Sentry
    - Zoho
    - GitHub Actions
    - jQuery/Twig/Sass/Gulp and React/Redux/Sass/webpack
    */

    <section className="skills light2-page">
        <h3 className="fade-item">Skills</h3>
        <div className="skills__list">
            <div className="skills__category fade-item">
                <h4 className="skills__category-title">Markup</h4>
                <div className="skills__items-container">
                    <div className="skills__item">
                        <img className="skills__img" src={HTML5} alt="HTML5" />
                        <p>HTML5</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__img" src={_React} alt="JSX" />
                        <p>JSX</p>
                    </div>
                </div>
            </div>

            <div className="skills__category fade-item">
                <h4 className="skills__category-title">CSS</h4>
                <div className="skills__items-container">
                    <div className="skills__item">
                        <img className="skills__img" src={CSS3} alt="CSS3" />
                        <p>CSS3</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__img" src={Sass} alt="Sass" />
                        <p>Sass</p>
                    </div>
                </div>
            </div>

            <div className="skills__category fade-item">
                <h4 className="skills__category-title">JavaScript</h4>
                <div className="skills__items-container">
                    <div className="skills__item">
                        <img
                            className="skills__img"
                            src={JavaScript}
                            alt="JavaScript"
                        />
                        <p>Javascript</p>
                    </div>
                    <div className="skills__item">
                        <img
                            className="skills__img"
                            src={jQuery}
                            alt="jQuery"
                        />
                        <p>jQuery</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__img" src={_React} alt="React" />
                        <p>React</p>
                    </div>
                    <div className="skills__item">
                        <img
                            className="skills__img"
                            src={ReactRouter}
                            alt="React Router"
                        />
                        <p>React Router</p>
                    </div>
                </div>
            </div>

            <div className="skills__category fade-item">
                <h4 className="skills__category-title">Build Tools</h4>
                <div className="skills__items-container">
                    <div className="skills__item">
                        <img className="skills__img" src={NPM} alt="NPM" />
                        <p>NPM</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__img" src={Gulp} alt="Gulp" />
                        <p>Gulp</p>
                    </div>
                </div>
            </div>

            <div className="skills__category fade-item">
                <h4 className="skills__category-title">Other</h4>
                <div className="skills__items-container">
                    <div className="skills__item">
                        <img
                            className="skills__img"
                            src={GitHub}
                            alt="GitHub"
                        />
                        <p>GitHub</p>
                    </div>
                    <div className="skills__item">
                        <img
                            className="skills__img"
                            src={ESLint}
                            alt="ESLint"
                        />
                        <p>ESLint</p>
                    </div>
                    <div className="skills__item">
                        <img
                            className="skills__img"
                            src={Photoshop}
                            alt="Photoshop"
                        />
                        <p>Photoshop</p>
                    </div>
                    <div className="skills__item">
                        <img
                            className="skills__img"
                            src={Math}
                            alt="Mathematics"
                        />
                        <p>Mathematics</p>
                    </div>
                    <div className="skills__item">
                        <img
                            className="skills__img"
                            src={Spanish}
                            alt="Spanish"
                        />
                        <p>Spanish</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
