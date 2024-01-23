/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'display': ['Barlow'],
      'body': ['"Barlow Condensed"'],
    },
    extend: {
      colors: {
        'k-purple': '#741AC6',
        'k-green': '#93D500',
        'k-gray-dark': '#273444',
        'k-gray': '#C9C9C9',
        'k-gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
}

