module.exports = {
    env: {
        development: {
            plugins: ["macros"],
        },
        production: {
            plugins: ["macros"],
        },
        test: {
            presets: [
                ["@babel/preset-env", { targets: { node: "current" } }],
                "@babel/preset-react",
            ],
        },
    },
};
