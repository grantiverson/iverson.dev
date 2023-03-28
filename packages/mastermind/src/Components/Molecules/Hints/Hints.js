import React from "react";
import PropTypes from "prop-types";

import { Hint } from "../../Atoms";

import "./Hints.scss";

const Hints = ({ hints = [] }) => {
    [...hints].sort(({ color: a }, { color: b }) => {
        if (a === null) return 1;
        if (b === null) return -1;
        return a.localeCompare(b);
    });
    const displayedHints = [
        hints[0] || null,
        hints[1] || null,
        hints[2] || null,
        hints[3] || null,
    ];

    return (
        <div className="hints">
            {!!hints.length &&
                displayedHints.map(({ color, id }) => (
                    <Hint key={id} {...{ color }} />
                ))}
        </div>
    );
};

Hints.defaultProps = {
    hints: undefined,
};

Hints.propTypes = {
    hints: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string, value: PropTypes.string }),
    ),
};

export default Hints;
