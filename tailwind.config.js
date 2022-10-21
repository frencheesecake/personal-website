/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "sm": "480px",
      "md": "768px",
      "lg": "976px",
      "xl": "1440px",
    },
    extend: {
      colors: {
        "green": "#84FF90",
        "blue": "#A3E9FF",
        "purple": "#B79EFF",
        "red": "#FFB1B1",
      }
    },
  },
  plugins: [],
}
