/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e3a8a',
        'secondary': '#1d4ed8',
      },
    },
  },
  plugins: [],
}