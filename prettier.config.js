const options = {
  arrowParens: "avoid",
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: "lf",
  tabWidth: 2,
  trailingComma: "none",
};

const plugins = [require.resolve("prettier-plugin-tailwindcss")];
exports = { options, plugins };
