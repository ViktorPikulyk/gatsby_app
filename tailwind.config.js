const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: `#313132`,
        secondary: `#f5f5f7`,
        hovering: `#2f2f2f`,
        textHeader: `#cbcbcb`,
        gfirst: `#ddeedb`,
        glast: `#9ed5f3`,
        greySecondary: `#6e6e73`,
      },
      borderRadius: {
        xlg: `1rem`,
      },
      minWidth: {
        midBox: `20rem`,
        smallBox: `10rem`,
        invBox: `calc((100% - 1280px)/2)`,
      },
      margin: {
        screenXL: `calc((100% - 1280px)/2)`,
      },
      width:{
        invBox: `calc((100% - 1280px)/2)`,
      },
      lineHeight: {
        px10: `10px`,
      },
      keyframes: {
        slideInFromLeft: {
        '0%': {transform: 'translateX(-100%)'},
        '100%': {transform: 'translateX(0)'},
        },
        slideInFromRight: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        slideInFromBottom: {
          '0%': {transform: 'translateY(100%)'},
          '100%': {transform: 'translateY(0)'},
        },
      },
      animation: {
        slideInFromLeft : '0.3s ease-out 0s 1 slideInFromLeft',
        slideInFromRight : '0.3s ease-out 0s 1 slideInFromRight',
        slideInFromBottom: '0.5s ease-out 0s 1 slideInFromBottom',
      },
    }
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}
