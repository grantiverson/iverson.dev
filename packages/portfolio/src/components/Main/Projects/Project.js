import React from "react";
import PropTypes from "prop-types";

import constants from "../../../core/constants";

import Images from "../../../images";
import { GitHub } from "../../common/FontAwesome/brands";
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

    const images = {
        [ProjectTypes.HTML_CSS]: (
            <>
                <ProjectImage alt={ProjectTypes.HTML_CSS} src={Images.html} />
                <ProjectImage alt={ProjectTypes.HTML_CSS} src={Images.css} />
            </>
        ),
        [ProjectTypes.JAVASCRIPT]: (
            <ProjectImage
                alt={ProjectTypes.JAVASCRIPT}
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
        <div className="project">
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

Project.propTypes = {
    description: PropTypes.string.isRequired,
    repositoryUrl: PropTypes.string.isRequired,
    ss: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.number).isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Project;
