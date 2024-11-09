/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#00A651',
        'secondary':'#022F74',
        'custom-blue': '#EAEFFF'
      },
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}