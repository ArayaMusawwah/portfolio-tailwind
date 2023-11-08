/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#5b21b6',
        'secondary': '#d1d5db',
        'lightPrimary': 'rgb(228 228 231)',
      },

      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

