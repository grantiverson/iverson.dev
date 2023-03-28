import React from "react";

import Hints from ".";

export default {
    argTypes: {
        hints: { control: "object" },
    },
    component: Hints,
    title: "Components/Molecules/Hints",
};

const Template = (args) => <Hints {...args} />;

export const _Hints = Template.bind({});
_Hints.args = {
    hints: [
        { color: "black", id: "hint-0" },
        { color: "white", id: "hint-1" },
        { color: null, id: "hint-2" },
        { color: null, id: "hint-3" },
    ],
};
