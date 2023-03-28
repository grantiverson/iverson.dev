import React from "react";
import PropTypes from "prop-types";

import Piece from "../../Atoms/Piece";

import "./Pieces.scss";

const Pieces = ({ active, row, ...rest }) => (
    <div className="pieces">
        {row.map(({ color, id }, i) => (
            <Piece
                column={i}
                isActive={active === i}
                key={id}
                {...{ color }}
                {...rest}
            />
        ))}
    </div>
);

Pieces.defaultProps = {
    active: undefined,
};

Pieces.propTypes = {
    active: PropTypes.number,
    row: PropTypes.arrayOf(
        PropTypes.shape({ color: PropTypes.string, id: PropTypes.string }),
    ).isRequired,
};

export default Pieces;
