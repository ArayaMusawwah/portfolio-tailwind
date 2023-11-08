/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#5b21b6',
        'secondary': '#d1d5db',
        'tertiary': '#1e293b',
        'lightPrimary': 'rgb(228 228 231)',
        'darkPrimary': 'rgb(17 24 39)',
      },

      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

