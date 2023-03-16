/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "src/game.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "off-white": "#fffcf2",
        "gray-white": "#ccc5b9",
        "brownish-gray": "#403d39",
        "black-grey": "#252422",
        "reyada-orange": "#eb5e28"
      }
    },
  },
  plugins: [],
}
