/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Heboo': ['Heebo', 'sans-serif']
      },
      colors: {
        'primary-color': '#FF6464',
        'secundary-color': ' #00A8CC',
        'dark-color': '#21243D',
        'light-color': '#8695A4'
      }
    },
  },
  plugins: [],
}
