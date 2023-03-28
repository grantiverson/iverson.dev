import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActive, setHints, setRow } from "../../redux/boardSlice";
import { checkGuess, guessColors } from "../../utility";

import { Pieces } from "../../Components/Molecules";
import { ConnectedPlayField, Row } from "../../Components/Organisms";

import "./Board.scss";

const Board = () => {
    const { active, rows, solution } = useSelector((state) => state.board);
    const dispatch = useDispatch();

    const onClick = ({ color }) => {
        // update new row color
        const newRow = [...rows[active.row].row];
        const newPiece = { ...newRow[active.column], color };
        newRow[active.column] = newPiece;

        // set next piece as active
        const newActive = {
            ...active,
            column: active.column + 1,
        };

        // get hints from guess
        const newHints = checkGuess(solution, newRow);

        dispatch(setRow({ active, row: newRow }));

        // if at the end of the row, make the first piece in the next row active
        // and check the guess against the solution
        if (active.column === 3) {
            newActive.column = 0;
            newActive.row = active.row - 1;

            dispatch(setHints({ active, hints: newHints }));
        }

        dispatch(setActive(newActive));
    };

    return (
        <div className="board">
            <Row row={solution} />
            <ConnectedPlayField />
            <Pieces
                row={guessColors.map((color) => ({ color, id: color }))}
                {...{ onClick }}
            />
        </div>
    );
};

export default Board;
