import React from "react";

import constants from "../../../core/constants";

import Images from "../../../images";
import { GitHub } from "../../common/FontAwesome/brands";

import "./Project.scss";

const Project = ({
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
            className="project__technology"
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
        <div className="project fade-item">
            <a href={url} target="_blank" rel="noreferrer">
                <img className="project__screen-shot" src={ss} alt={title} />
                <div className="project__overlay">
                    <span className="project__title">{title}</span>
                    <p>{description}</p>
                </div>
                <div className="project__technologies">
                    {technologies.map((technology) => (
                        <React.Fragment key={technology}>
                            {images[technology]}
                        </React.Fragment>
                    ))}
                </div>
            </a>
            <a
                className="project__github"
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
            >
                <GitHub />
            </a>
        </div>
    );
};

export default Project;
