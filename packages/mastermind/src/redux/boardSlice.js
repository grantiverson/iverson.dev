/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

import { guessColors } from "../utility";

const initialHints = [
    { color: null, id: "hint-0" },
    { color: null, id: "hint-1" },
    { color: null, id: "hint-2" },
    { color: null, id: "hint-3" },
];
const initialRow = [
    { color: null, id: "piece-0" },
    { color: null, id: "piece-1" },
    { color: null, id: "piece-2" },
    { color: null, id: "piece-3" },
];
const initialRows = [
    { hints: initialHints, id: "row-0", row: initialRow },
    { hints: initialHints, id: "row-1", row: initialRow },
    { hints: initialHints, id: "row-2", row: initialRow },
    { hints: initialHints, id: "row-3", row: initialRow },
    { hints: initialHints, id: "row-4", row: initialRow },
    { hints: initialHints, id: "row-5", row: initialRow },
    { hints: initialHints, id: "row-6", row: initialRow },
    { hints: initialHints, id: "row-7", row: initialRow },
];

const generateSolution = () =>
    Array(4)
        .fill(null)
        .reduce(
            (arr, _, i) =>
                arr.concat({
                    color: guessColors[Math.floor(Math.random() * 6)],
                    id: `piece-${i}`,
                }),
            [],
        );

export const boardSlice = createSlice({
    name: "board",
    initialState: {
        active: { row: initialRows.length - 1, column: 0 },
        rows: initialRows,
        solution: generateSolution(),
    },
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        },
        setHints: (state, action) => {
            const { active, hints } = action.payload;

            state.rows[active.row].hints = hints;
        },
        setRow: (state, action) => {
            const { active, row } = action.payload;

            state.rows[active.row].row = row;
        },
    },
});

export const { setActive, setHints, setRow } = boardSlice.actions;

export default boardSlice.reducer;
