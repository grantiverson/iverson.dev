module.exports = {
    collectCoverage: false,
    collectCoverageFrom: [
        "src/**/*.js",
        "!src/**/index.js",
        "!src/**/*.stories.js",
    ],
    coverageThreshold: {
        global: {
            statements: 66.98,
            branches: 93.93,
            lines: 67.67,
            functions: 65.71,
        },
    },
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    },
    setupFilesAfterEnv: ["<rootDir>jest-setup.js"],
    testEnvironment: "jsdom",
};
