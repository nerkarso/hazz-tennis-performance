const { lightBlue, blueGray } = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./+(components|elements|pages)/**/*.+(js|jsx|ts|tsx)'],
  theme: {
    extend: {
      colors: {
        base: blueGray,
        primary: lightBlue,
      },
    },
  },
};
