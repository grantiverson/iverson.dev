import React from "react";
import PropTypes from "prop-types";

import constants from "../../../core/constants";

const ProjectImage = ({ alt, src }) => {
    const { ProjectTypes } = constants.ENUMS;

    return (
        <img
            className="project__technology"
            {...{ src }}
            // convert type enum back to string
            alt={ProjectTypes[alt]}
        />
    );
};

ProjectImage.propTypes = {
    alt: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
};

export default ProjectImage;
