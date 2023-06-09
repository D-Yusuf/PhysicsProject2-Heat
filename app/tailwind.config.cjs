/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "src/game.html",
    "src/code.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   'md': '880px'
      // },
      colors:{
        "off-white": "#fffcf2",
        "gray-white": "#ccc5b9",
        "brownish-gray": "#403d39",
        "black-grey": "#252422",
        "jet-gray": "#33312E",
        "reyada-orange": "#eb5e28",
        "primary": "#1C1C1C",
        "purple": "#6943FF",
        "main":"#F4F4F4",
        "title": "#5A537B",
        "info": "#353535"
      },
      
    },
  },
  plugins: [],
}
