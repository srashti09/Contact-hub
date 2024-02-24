/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        turqoise:"#40E0D0",
        black:"#010013",
        blue:"#172671",
        orange:"#FF7704",
        yellow:"#FFBA00",
        green:"#138808",
        laurel : "#537895",

      }
    },
  },
  plugins: [],
}