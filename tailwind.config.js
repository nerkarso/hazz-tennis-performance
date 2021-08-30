const { gray, orange, teal } = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: ['./+(components|elements|pages)/**/*.+(js|jsx|ts|tsx)'],
  theme: {
    extend: {
      colors: {
        neutral: gray,
        primary: teal,
        orange: orange,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
