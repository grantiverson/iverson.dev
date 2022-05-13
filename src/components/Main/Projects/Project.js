import React from "react";

import constants from "../../../core/constants";

import Images from "../../../images";
import { GitHub } from "../../common/FontAwesome/brands";

const Projects = ({
    description,
    repositoryUrl,
    ss,
    technologies,
    title,
    url,
}) => {
    const { ProjectTypes } = constants.ENUMS;

    const ProjectImage = ({ alt, src }) => (
        <img
            className="projects-skills-img"
            {...{ src }}
            alt={ProjectTypes[alt]}
        />
    );

    const images = {
        [ProjectTypes["HTML/CSS"]]: (
            <>
                <ProjectImage
                    alt={ProjectTypes["HTML/CSS"]}
                    src={Images.html}
                />
                <ProjectImage alt={ProjectTypes.CSS} src={Images.css} />
            </>
        ),
        [ProjectTypes.JS]: (
            <ProjectImage
                alt={ProjectTypes.JavaScript}
                src={Images.javascript}
            />
        ),
        [ProjectTypes.MATH]: (
            <ProjectImage alt={ProjectTypes.MATH} src={Images.math} />
        ),
        [ProjectTypes.REACT]: (
            <ProjectImage alt={ProjectTypes.REACT} src={Images.react} />
        ),
    };

    return (
        <div className="projects-item fade-item all-projects html-css-projects javascript-projects react-projects">
            <a href={url} target="_blank" rel="noreferrer">
                <img className="projects-img" src={ss} alt={title} />
                <div className="projects-item-details">
                    <h4 className="projects-item-title">{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="projects-skills-img-container">
                    {technologies.map((technology) => (
                        <React.Fragment key={technology}>
                            {images[technology]}
                        </React.Fragment>
                    ))}
                </div>
            </a>
            <a
                className="projects-skills-github"
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
            >
                <GitHub />
            </a>
        </div>
    );
};

export default Projects;
