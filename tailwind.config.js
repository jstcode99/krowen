/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'display': ['Barlow'],
      'body': ['"Barlow Condensed"'],
    },
    extend: {
      colors: {
        'k-purple': '#741AC6',
        'k-green': '#93D500',
        'k-gray-dark': '#111111',
        'k-gray': '#2D2D2D',
        'k-gray-light': '#C9C9C9',
      },
    },
  },
  plugins: [],
}

