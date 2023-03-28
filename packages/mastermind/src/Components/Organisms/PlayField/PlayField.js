import React from "react";
import PropTypes from "prop-types";

import Row from "../Row";

const PlayField = ({ active, onClick, rows }) =>
    rows.map(({ hints, id, row }, rowIndex) => (
        <Row
            active={active.row === rowIndex ? active.column : undefined}
            key={id}
            onClick={({ column }) => onClick({ row: rowIndex, column })}
            {...{ hints, row }}
        />
    ));

PlayField.defaultProps = {
    active: undefined,
};

PlayField.propTypes = {
    active: PropTypes.shape({
        row: PropTypes.number,
        column: PropTypes.number,
    }),
    onClick: PropTypes.func.isRequired,
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            hints: PropTypes.arrayOf(PropTypes.shape()),
            id: PropTypes.string.isRequired,
            row: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        }).isRequired,
    ).isRequired,
};

export default PlayField;
