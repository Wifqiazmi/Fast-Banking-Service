/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        lightGray: 'rgba(216, 216, 216, 1)',
        gray: 'rgba(255, 255, 255, 0.3)',
        darkBlue: 'rgba(34, 73, 219, 1)',
        primary: 'rgba(58, 97, 240, 1)',
        secondary: 'rgba(245, 166, 71, 1)',
        dark: '#181C33',
      },
      backgroundColor: {
        gray: 'rgba(245, 246, 251, 1)',
        cream: '#FFF7ED',
      },
      divideColor: {
        gray: 'rgba(245, 246, 251, 1)',
        cream: 'rgba(243, 229, 212, 1)',
      },
      textColor: {
        lightGray: 'rgba(255, 255, 255, 0.5)',
        gray: 'rgba(51, 51, 51, 0.5)',
        grayHover: 'rgba(51, 51, 51, 0.7)',
      },
      borderColor: {
        primary: 'rgba(58, 97, 240, 0.3)',
        gray: 'rgba(218, 218, 218, 1)',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
