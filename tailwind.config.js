/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'display': ['Barlow'],
      'body': ['"Barlow Condensed"'],
    },
    extend: {
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

