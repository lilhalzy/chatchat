/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
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
