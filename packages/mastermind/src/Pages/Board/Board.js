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
        const newPieces = [...rows[active.row].pieces];
        const newPiece = { ...newPieces[active.piece], color };
        newPieces[active.piece] = newPiece;

        // set next piece as active
        const newActive = {
            ...active,
            piece: active.piece + 1,
        };

        // get hints from guess
        const newHints = checkGuess(solution, newPieces);

        dispatch(setRow({ active, pieces: newPieces }));

        // if at the end of the row, make the first piece in the next row active
        // and check the guess against the solution
        if (active.piece === 3) {
            newActive.piece = 0;
            newActive.row = active.row - 1;

            dispatch(setHints({ active, hints: newHints }));
        }

        dispatch(setActive(newActive));
    };

    return (
        <div className="board">
            <Row pieces={solution} />
            <ConnectedPlayField />
            <Pieces
                pieces={guessColors.map((color) => ({ color, id: color }))}
                {...{ onClick }}
            />
        </div>
    );
};

export default Board;
