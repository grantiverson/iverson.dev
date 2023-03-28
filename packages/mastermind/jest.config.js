module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.js", "!src/**/index.js"],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            lines: 100,
            functions: 100,
        },
    },
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    },
    setupFilesAfterEnv: ["<rootDir>jest-setup.js"],
    testEnvironment: "jsdom",
};
