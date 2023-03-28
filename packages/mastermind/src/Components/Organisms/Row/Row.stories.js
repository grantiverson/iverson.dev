import React, { useState } from "react";

import Row from "./Row";

export default {
    argTypes: {
        active: { control: "number" },
        hints: { control: "object" },
        row: { control: "object" },
    },
    component: Row,
    title: "Components/Organisms/Row",
};

const Template = ({ active, ...args }) => {
    const [_active, setActive] = useState(active);
    const onClick = (column) => setActive(column);

    return <Row {...args} active={_active} onClick={onClick} />;
};

Template.propTypes = Row.propTypes;

export const _Row = Template.bind({});
_Row.args = {
    active: 1,
    hints: [
        { color: "black", id: "hint-0" },
        { color: "white", id: "hint-1" },
        { color: null, id: "hint-2" },
        { color: null, id: "hint-3" },
    ],
    row: [
        { color: "yellow", id: "piece-0" },
        { color: "green", id: "piece-1" },
        { color: "blue", id: "piece-2" },
        { color: "blue", id: "piece-3" },
    ],
};
