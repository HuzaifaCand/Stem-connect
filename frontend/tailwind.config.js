/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primaryBlue": '#001f3f',
      "secondaryBlue": '#003366',
      "navbarBlue":"#001B37",
      "primaryBlack": '#121212',
      "secondaryBlack": '#333333',
      "primaryWhite": '#efefef',
      "primaryGray": "#dddddd",
      "accent": '#00a1e0',
      "yellow": "#EFD90E",
      "secondaryGray": '#2f2d2d',
      "error": "f01e2c"
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 27%'
      },
    },
  },
  plugins: [],
}
