/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7239a8',
          50: '#f5f5ff',
          100: '#ebebff',
          200: '#d6d6ff',
          300: '#b3b3ff',
          400: '#8080ff',
          500: '#646cff',
          600: '#3333ff',
          700: '#0000ff',
          800: '#0000cc',
          900: '#000099',
          950: '#000066',
        }
      }
    },
  },
  plugins: [],
}