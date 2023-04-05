import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { Hints, Pieces } from "../../Molecules";

import "./Row.scss";

const Row = ({ active, className, hints, pieces, ...rest }) => (
    <div className={cx("row", className)}>
        <Hints {...{ hints }} />
        <Pieces {...{ active, pieces }} {...rest} />
    </div>
);

Row.defaultProps = {
    active: undefined,
    className: "",
    hints: undefined,
};

Row.propTypes = {
    active: PropTypes.number,
    className: PropTypes.string,
    hints: PropTypes.arrayOf(PropTypes.shape()),
    pieces: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Row;
