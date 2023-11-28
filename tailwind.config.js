/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': {
          400: '#262E49',
          700: '#171C2C'
        },
        'blue': {
          200: '#DEE0E4',
          400: '#8894D8',
          800: '#525982'
        },
        'green': {
          400: '#84CB98',
          500: '#77B789'
        },
        'brown': {
          400: '#DFA175'
        },
        'lightGray': {
          400: '#E6E6E6',
          700: '#BFBFBF'
        }
      },
      backgroundImage: {
        'arrowDown': "url('/src/assets/chevron-down.svg')" 
      }
    },
  },
  plugins: [],
}

