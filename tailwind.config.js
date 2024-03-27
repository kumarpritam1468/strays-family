/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-yellow':'#F8AB27',
        'sec-yellow':'#ffcb73'
      }
    },
  },
  plugins: [],
}