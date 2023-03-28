import React, { useState } from "react";

import Pieces from "./Pieces";

export default {
    argTypes: {
        active: { control: "number" },
        row: { control: "object" },
    },
    component: Pieces,
    title: "Components/Molecules/Pieces",
};

const Template = ({ active, ...args }) => {
    const [_active, setActive] = useState(active);
    const onClick = (column) => setActive(column);

    return <Pieces {...args} active={_active} onClick={onClick} />;
};

Template.propTypes = Pieces.propTypes;

export const _Pieces = Template.bind({});
_Pieces.args = {
    active: 1,
    row: [
        { color: "yellow", id: "piece-0" },
        { color: "green", id: "piece-1" },
        { color: "blue", id: "piece-2" },
        { color: "blue", id: "piece-3" },
    ],
};
