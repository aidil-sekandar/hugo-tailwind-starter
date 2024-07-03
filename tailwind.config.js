/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./layouts/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: "#1C1A27",
        textPrimary: "#FBFAFE",
      },
    },
  },
  plugins: [],
}
