import React from "react";

import "./About.scss";

const About = () => (
    <section className="about light-page">
        <h3 className="fade-item">About</h3>
        <div className="about__content">
            <p className="indent fade-item">
                I am an <span className="dark-text-span">avid learner</span>{" "}
                with a mission to use my skills to uplift others. After teaching
                math for eight years I became frustrated with the education
                system and decided to switch careers. Now I am applying my{" "}
                <span className="dark-text-span">expert problem solving</span>{" "}
                and <span className="dark-text-span">communication</span> skills
                to web development.
            </p>
            <p className="indent fade-item">
                While completing a{" "}
                <span className="dark-text-span">Front-End Web Developer</span>{" "}
                Nanodegree through Udacity, I leveled up my coding abilities and
                learned about using popular modern{" "}
                <span className="dark-text-span">
                    JavaScript frameworks and libraries
                </span>
                , making and handling API calls, and build tools that automate
                time consuming aspects of development.
            </p>
            <p className="indent fade-item">
                I spend most of my free time building apps that challenge me to
                grow in my understanding of the latest technologies. My goal is
                to continue increasing my talents to one day create tech that
                makes a difference in the lives of millions around the world.
            </p>
        </div>
    </section>
);

export default About;
