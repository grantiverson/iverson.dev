import React from "react";
import PropTypes from "prop-types";

import { Hints, Pieces } from "../../Molecules";

import "./Row.scss";

const Row = ({ active, hints, row, ...rest }) => (
    <div className="row">
        <Hints {...{ hints }} />
        <Pieces {...{ active, row }} {...rest} />
    </div>
);

Row.defaultProps = {
    active: undefined,
    hints: undefined,
};

Row.propTypes = {
    active: PropTypes.number,
    hints: PropTypes.arrayOf(PropTypes.shape()),
    row: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Row;
