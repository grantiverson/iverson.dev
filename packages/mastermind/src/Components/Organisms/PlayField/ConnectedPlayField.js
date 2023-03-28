import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActive } from "../../../redux/boardSlice";

import PlayField from "./PlayField";

const ConnectedPlayField = () => {
    const { active, rows } = useSelector((state) => state.board);
    const dispatch = useDispatch();

    const onClick = ({ row, column }) => dispatch(setActive({ row, column }));

    return <PlayField {...{ active, onClick, rows }} />;
};

export default ConnectedPlayField;
