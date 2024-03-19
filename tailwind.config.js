/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark: "#2b2b2b",
        light: "#fff",
        accent: "#006341",
        accent_alt: "#1e3932",
        c1: "#d5d0ea",
        c2: "#f2f0eb",
        c3: "#cee8c9",
        c4: "#f5cac4",
        c5: "#dbe6f2",
        c6: "#d5d0ea",
        c7: "#e99264",
        c8: "#006241"
      },
      fontFamily:{
        'boldB':["SoDoSans Bold"]
      }
    },
  },
  plugins: [],
}