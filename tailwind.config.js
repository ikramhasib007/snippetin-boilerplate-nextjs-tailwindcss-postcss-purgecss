// const defaultTheme = require('tailwindcss/defaultTheme')
// const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      center: true,
      // padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#ECEFF1',
          100: '#CFD8DC',
          200: '#B0BEC5',
          300: '#90A4AE',
          400: '#78909C',
          500: '#607D8B',
          600: '#546E7A',
          700: '#455A64',
          800: '#37474F',
          900: '#263238',
        }
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      screens: {
        'print': {'raw': 'print'},
        // print:text-black to specify styles that should only be applied when someone tries to print the page
        'portrait': {'raw': '(orientation: portrait)'},
        // => @media (orientation: portrait) { ... },
        'xs': {'max': '639px'}
      },
      borderRadius: {
        circle: '50%',
        "md": '.375rem'
      },
      
    }
  },
  
  variants: {
    position: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    visibility: ['responsive', 'hover', 'focus', 'group-hover'],
  },

  plugins: [
    require('tailwindcss-transforms'),
    require('tailwindcss-transitions'),

    function({ addVariant, e }) {
      addVariant('disabled', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}:disabled`
        })
      })
    },

    function({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.2xl') },
        'h2': { fontSize: config('theme.fontSize.xl') },
        'h3': { fontSize: config('theme.fontSize.lg') },
      })
    },

  ],
}