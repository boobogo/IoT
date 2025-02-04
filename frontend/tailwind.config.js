/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': "var(--background-color)",
        'bg-secondary': "var(--background-color-secondary)",
        'text-primary': "var(--text-color)",
      },
    },
  },
  plugins: [],
};