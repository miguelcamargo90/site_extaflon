const CracoBabelLoader = require("craco-babel-loader");

module.exports = {
  babel: {
    plugins: [], // Certifique-se de que o array está vazio
  },
  plugins: [
    {
      plugin: CracoBabelLoader,
      options: {
        includes: [/src/],
      },
    },
  ],
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
