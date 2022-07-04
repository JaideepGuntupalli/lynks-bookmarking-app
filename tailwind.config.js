/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      dm: ["DM Sans", ...defaultTheme.fontFamily.serif],
      poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
  },
    extend: {},
  },
  plugins: [],
}
