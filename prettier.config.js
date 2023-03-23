const options = {
  arrowParens: 'avoid',
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  tabWidth: 2,
  trailingComma: 'none',
  plugins: [require.resolve('prettier-plugin-tailwindcss')]
};

module.exports = options;
