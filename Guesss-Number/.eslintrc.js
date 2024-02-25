module.exports = {
  parser: "@babel/eslint-parser", // Specify the parser (if using Babel)
  extends: [
    "eslint:recommended", // Use the recommended ESLint rules
    "plugin:react/recommended", // Use recommended rules for React
    "plugin:jsx-a11y/recommended", // Use recommended rules for accessibility
    "plugin:import/errors", // Use rules for import errors
    "plugin:import/warnings", // Use rules for import warnings
    "plugin:prettier/recommended", // Use Prettier plugin
  ],
  plugins: ["react", "jsx-a11y", "import"], // Define ESLint plugins
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
  env: {
    browser: true, // Set the environment to browser
    node: true, // Set the environment to node
    es6: true, // Enable ES6 features
  },
  rules: {
    // Define additional rules or override default rules here
  },
};
