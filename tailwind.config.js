/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: '#DCCA87',
        black: '#0C0C0C',
        gray: '#545454',
        crimson: 'F5EFDB',
        grey: '#AAAAAA',
        white: '#FFFFFF'
      },
      wordSpacing: {
        wider: '0.25em',
        widest: '0.5em',
        custom: '1em',
      }
    },
  },
  plugins: [],
}