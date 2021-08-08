const { teal, trueGray, orange } = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./+(components|elements|pages)/**/*.+(js|jsx|ts|tsx)'],
  theme: {
    extend: {
      colors: {
        base: trueGray,
        primary: teal,
        orange: orange,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
