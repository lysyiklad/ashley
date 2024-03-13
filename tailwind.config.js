/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // xl: { max: '1440px' },
    // lg: { max: '976px' },
    // md: { max: '768px' },
    // sm: { max: '480px' },
    // },
    extend: {
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
