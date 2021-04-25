const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssNesting = require('postcss-nesting');

module.exports = {
  plugins: [
    autoprefixer,
    tailwindcss,
    postcssNesting,
  ],
};
