/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },

  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin") ,
  ],
}

