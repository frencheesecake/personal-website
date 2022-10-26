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
        "green-darker": "#459B4E",
        "blue": "#A3E9FF",
        "blue-darker": "#51AAC6",
        "purple": "#B79EFF",
        "purple-darker": "#6E52BE",
        "red": "#FFB1B1",
        "red-darker": "#BF3D3D",
      }
    },
  },
  plugins: [],
}
