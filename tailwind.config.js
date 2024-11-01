/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'revelia': ['Revelia', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}