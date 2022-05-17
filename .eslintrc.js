module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "airbnb"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: "off",
        quotes: "off",
        "implicit-arrow-linebreak": "off",
        "react/function-component-definition": [
            "warn",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/jsx-indent": "off",
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".js", ".jsx"] },
        ],
        "react/jsx-indent-props": "off",
    },
};
