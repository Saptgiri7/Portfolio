/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#6b46c1",
          light: "#f3e8ff",
          "lightCard": "#faf5ff", 
          "lightHover": "#ede9fe" 
        },
      },
    },
  },
  plugins: [],
}
