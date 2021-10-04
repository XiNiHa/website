const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '3xl': '28px',
      '5xl': '42px'
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        title: ['HSGaeulSenggak20', 'sans-serif'],
        body: ['GowunDodum-Regular', 'sans-serif'],
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        fill: {
          1: '#111111',
          3: '#333333',
          5: '#555555',
          7: '#777777',
          c: '#cccccc',
          d: '#dddddd'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
