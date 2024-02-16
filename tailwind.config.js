/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'display': ['Barlow'],
      'body': ['"Barlow Condensed"'],
    },
    extend: {
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
        'blur': 'blur 400ms linear',
      },
      keyframes: {
        'blur': {
          '0%': { filter: "blur(5px)" },
          '75%': { filter: "blur(3px)" },
          '100%': { filter: "blur(0px)" },
        },
        'background-shine': {
          'from': {
            'backgroundPosition': '0 0'
          },
          'to': {
            'backgroundPosition': '-200% 0'
          }
        }
      },
      colors: {
        'k-purple': 'var(--purple)',
        'k-green': 'var(--green)',
        'k-gray-dark': '#111111',
        'k-gray': 'var(--gray)',
        'k-gray-light': '#C9C9C9',
      },
    },
    
  },
  plugins: [],
}

