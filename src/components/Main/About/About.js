import React from "react";

import "./About.scss";

const About = () => (
    <section className="about light-page">
        <h3>About</h3>
        <div className="about__content">
            <p className="indent">
                I am an <span className="dark-text-span">avid learner</span>{" "}
                with a mission to use my skills to uplift others.
            </p>
            <p className="indent">
                After teaching math for eight years I became frustrated with the
                education system and decided to switch careers. Now I am
                applying my{" "}
                <span className="dark-text-span">expert problem solving</span>{" "}
                and <span className="dark-text-span">communication</span> skills
                to web development.
            </p>
            <p className="indent">
                While completing a{" "}
                <span className="dark-text-span">Front-End Web Developer</span>{" "}
                Nanodegree through Udacity, I leveled up my coding abilities and
                learned about using popular modern{" "}
                <span className="dark-text-span">
                    JavaScript frameworks and libraries
                </span>
                , making and handling API calls, and build tools that simplify
                time consuming aspects of development.
            </p>
            <p className="indent">
                Now, as a{" "}
                <span className="dark-text-span">
                    Senior Front-end Engineer
                </span>
                , I focus on building systems to{" "}
                <span className="dark-text-span">improve code quality</span> and
                empowering other developers to have a{" "}
                <span className="dark-text-span">greater impact</span>.
            </p>
        </div>
    </section>
);

export default About;
