import React, { useState } from "react";

import PlayField from "./PlayField";

export default {
    argTypes: {
        active: { control: "object" },
        onClick: { action: "click" },
        rows: { control: "object" },
    },
    component: PlayField,
    title: "Components/Organisms/PlayField",
};

const Template = ({ active, ...args }) => {
    const [_active, setActive] = useState(active);
    const onClick = (newActive) => setActive(newActive);

    return <PlayField {...args} active={_active} onClick={onClick} />;
};

Template.propTypes = PlayField.propTypes;

export const _PlayField = Template.bind({});
_PlayField.args = {
    active: [7, 0],
    rows: [
        {
            hints: [
                { color: null, id: "hint-0" },
                { color: null, id: "hint-1" },
                { color: null, id: "hint-2" },
                { color: null, id: "hint-3" },
            ],
            id: "row-0",
            row: [
                { color: null, id: "piece-0" },
                { color: null, id: "piece-1" },
                { color: null, id: "piece-2" },
                { color: null, id: "piece-3" },
            ],
        },
        {
            hints: [
                { color: null, id: "hint-0" },
                { color: null, id: "hint-1" },
                { color: null, id: "hint-2" },
                { color: null, id: "hint-3" },
            ],
            id: "row-1",
            row: [
                { color: null, id: "piece-0" },
                { color: null, id: "piece-1" },
                { color: null, id: "piece-2" },
                { color: null, id: "piece-3" },
            ],
        },
        {
            hints: [
                { color: null, id: "hint-0" },
                { color: null, id: "hint-1" },
                { color: null, id: "hint-2" },
                { color: null, id: "hint-3" },
            ],
            id: "row-2",
            row: [
                { color: null, id: "piece-0" },
                { color: null, id: "piece-1" },
                { color: null, id: "piece-2" },
                { color: null, id: "piece-3" },
            ],
        },
        {
            hints: [
                { color: null, id: "hint-0" },
                { color: null, id: "hint-1" },
                { color: null, id: "hint-2" },
                { color: null, id: "hint-3" },
            ],
            id: "row-3",
            row: [
                { color: null, id: "piece-0" },
                { color: null, id: "piece-1" },
                { color: null, id: "piece-2" },
                { color: null, id: "piece-3" },
            ],
        },
        {
            hints: [
                { color: null, id: "hint-0" },
                { color: null, id: "hint-1" },
                { color: null, id: "hint-2" },
                { color: null, id: "hint-3" },
            ],
            id: "row-4",
            row: [
                { color: null, id: "piece-0" },
                { color: null, id: "piece-1" },
                { color: null, id: "piece-2" },
                { color: null, id: "piece-3" },
            ],
        },
        {
            hints: [
                { color: null, id: "hint-0" },
                { color: null, id: "hint-1" },
                { color: null, id: "hint-2" },
                { color: null, id: "hint-3" },
            ],
            id: "row-5",
            row: [
                { color: null, id: "piece-0" },
                { color: null, id: "piece-1" },
                { color: null, id: "piece-2" },
                { color: null, id: "piece-3" },
            ],
        },
        {
            hints: [
                { color: null, id: "hint-0" },
                { color: null, id: "hint-1" },
                { color: null, id: "hint-2" },
                { color: null, id: "hint-3" },
            ],
            id: "row-6",
            row: [
                { color: null, id: "piece-0" },
                { color: null, id: "piece-1" },
                { color: null, id: "piece-2" },
                { color: null, id: "piece-3" },
            ],
        },
        {
            hints: [
                { color: "black", id: "hint-0" },
                { color: "white", id: "hint-1" },
                { color: null, id: "hint-2" },
                { color: null, id: "hint-3" },
            ],
            id: "row-7",
            row: [
                { color: "yellow", id: "piece-0" },
                { color: "green", id: "piece-1" },
                { color: "blue", id: "piece-2" },
                { color: "blue", id: "piece-3" },
            ],
        },
    ],
};
