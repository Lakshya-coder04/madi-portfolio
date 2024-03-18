/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        facebook: '#316FF6',
        linkedin: '#0077b5',
        instagram: ' #d62976',
      },
      fontFamily: {
        'Bebas-Neue': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
