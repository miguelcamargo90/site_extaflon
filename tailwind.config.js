module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'petroleum-green': '#004f4b', // Exemplo de cor verde petróleo
        'smoke-light': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}