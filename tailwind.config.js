/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark: "#2b2b2b",
        light: "#fff",
        accent: "#006341"
      }
    },
  },
  plugins: [],
}