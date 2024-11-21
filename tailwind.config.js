/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '414px',
      },
      fontFamily: {
        serif: ['Quicksand', ...defaultTheme.fontFamily.serif]
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        8.5: '2.125rem',
        7.5: '1.875rem',
        9.5: '2.375rem',
        11.5: '2.875rem',
        15: '3.75rem',
        37: '9.5625rem',
      },
      colors: {
        mainBg: '#1D2123',
        button: '#FFFFFF12',
        mainBgGradient: 'linear-gradient(180deg, rgba(29, 33, 35, 0.80) 0%, #1D2123 61.48%), url(<path-to-image>), lightgray 50%',
        primary: {
          100: '#EFEEE0',
          900: '#1A1E1F'
        },
        secondary: {
          400: '#FACD66'
        },
        blue: {
          300: '#A4C7C6',
          600: '#609EAF'
        },
        red: {
          300: '#E5524A'
        }
      },
      borderRadius: {
        'lg.5': '0.625rem',
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}

