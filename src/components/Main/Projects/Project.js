import React from "react";
import PropTypes from "prop-types";

import constants from "../../../core/constants";

import * as images from "../../../images";
import { GitHub } from "../../common/FontAwesome";
import ProjectImage from "./ProjectImage";

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

    const technologyImages = {
        [ProjectTypes.HTML_CSS]: (
            <>
                <ProjectImage alt={ProjectTypes.HTML_CSS} src={images.html} />
                <ProjectImage alt={ProjectTypes.HTML_CSS} src={images.css} />
            </>
        ),
        [ProjectTypes.JAVASCRIPT]: (
            <ProjectImage
                alt={ProjectTypes.JAVASCRIPT}
                src={images.javascript}
            />
        ),
        [ProjectTypes.MATH]: (
            <ProjectImage alt={ProjectTypes.MATH} src={images.math} />
        ),
        [ProjectTypes.REACT]: (
            <ProjectImage alt={ProjectTypes.REACT} src={images.react} />
        ),
    };

    return (
        <div className="project">
            <a href={url} target="_blank" rel="noreferrer">
                <img className="project__screen-shot" src={ss} alt={title} />
                <div className="project__overlay">
                    <h4 className="project__title">{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="project__technologies">
                    {technologies.map((technology) => (
                        <React.Fragment key={technology}>
                            {technologyImages[technology]}
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

Project.propTypes = {
    description: PropTypes.string.isRequired,
    repositoryUrl: PropTypes.string.isRequired,
    ss: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.number).isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Project;
