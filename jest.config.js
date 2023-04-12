module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.js",
        "!src/**/index.js",
        "!src/babel-plugin-macros.config.js",
    ],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            lines: 100,
            functions: 100,
        },
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    },
    setupFilesAfterEnv: ["<rootDir>jest-setup.js"],
    testEnvironment: "jsdom",
};
