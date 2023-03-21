module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.js"],
    coverageThreshold: {
        global: {
            statements: 18.55,
            branches: 33.33,
            lines: 18.68,
            functions: 11.9,
        },
    },
    moduleNameMapper: { "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js" },
    setupFilesAfterEnv: ["<rootDir>jest-setup.js"],
    testEnvironment: "jsdom",
};
