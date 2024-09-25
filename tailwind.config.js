/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-cl' : '#d6aeac',
      },
      boxShadow:{
        'box-shadow': '0px 0px 30px black'
      }
    },
  },
  plugins: [],
  
  

}