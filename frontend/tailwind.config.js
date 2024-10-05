/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          50: '#f4f1ff',
          100: '#ebe6ff',
          200: '#dad1ff',
          300: '#bfabff',
          400: '#a17cff',
          500: '#8547ff',
          600: '#7822ff',
          700: '#6e17f1',
          800: '#590dca',
          900: '#4a0da5',
          950: '#2c0570'
        },
        secondary:{
          50: '#fffbed',
          100: '#fff6d4',
          200: '#ffeaa8',
          300: '#ffd971',
          400: '#ffbd38',
          500: '#fda512',
          600: '#f78e08',
          700: '#c66908',
          800: '#9d520f',
          900: '#7e4410',
          950: '#442106'
        },
        accent:{
          50: '#fef3f2',
          100: '#fde5e3',
          200: '#fcd0cc',
          300: '#f9b0a8',
          400: '#f38276',
          500: '#e74c3c',
          600: '#d53d2d',
          700: '#b33022',
          800: '#942b20',
          900: '#7b2921',
          950: '#43110c'
        }
      },
      fontFamily:{
        Montserrat: ['Montserrat', 'sans-serif'],
        Merienda: ['Merienda',' cursive']
      }
    },
  },
  plugins: [],
}

