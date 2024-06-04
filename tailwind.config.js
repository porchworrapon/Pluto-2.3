import { DEFAULT_EXTENSIONS } from '@babel/core';

/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#F43F18",
        secondary:"#F54620",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}

