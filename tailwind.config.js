/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'sm': '0.7rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      'xs': '240px',
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
      'xl': '1550px'
    },
    extend: {},
  },
  plugins: [],
}
