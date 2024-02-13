/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        xGreen: '#426B1F',
        xWhite: '#FAFAF5',
      },
      fontFamily: {
        title: ['Newsreader', 'serif'],
      },
    },
  },
  plugins: [],
};
