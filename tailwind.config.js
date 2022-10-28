/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}"
  ],
  theme: {
    extend: {
      colors: {
        "hackx-grey": '#121212',
        "text-main": "#d1d1d1",
        "accent": "#990000"
      },
      fontFamily: {
        "title": "BankGothic",
        "regular": "Poppins"
      },
    },
  },
  plugins: [],
}
