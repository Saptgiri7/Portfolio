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
          light: "#f3e8ff",        // bg-brand-light
          "lightCard": "#faf5ff", // bg-brand-light-card
          "lightHover": "#ede9fe" // hover:bg-brand-light-hover
        },
      },
    },
  },
  plugins: [],
}
