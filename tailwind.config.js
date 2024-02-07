/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
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
