const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    fontFamily: {
      display: 'var(--font-family-display)',
      body: 'var(--font-family-body)',
    },
    fontSize: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
    },
    extend: {
      colors: {
        'mp-dark-blue': 'var(--mp-dark-blue)',
        'mp-light-blue': 'var(--mp-light-blue)',
        'mp-grey': 'var(--mp-grey)',
        'mp-gray': 'var(--mp-grey)',
        'mp-disabled': 'rgba(0, 0, 0, 0.6)',
        facebook: 'var(--color-facebook)',
        twitter: 'var(--color-twitter)',
        instagram: 'var(--color-instagram)',
        whatsapp: 'var(--color-whatsapp)',
      },
      minWidth: {
        32: '8rem',
      },
      height: {
        144: '36rem',
        240: '60rem',
      },
      borderWidth: {
        12: '12px',
        14: '14px',
      },
      borderRadius: {
        12: '1.2rem',
        24: '2.4rem',
        36: '3.6rem',
        6: '0.6rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    plugin(({ addBase, config }) => {
      addBase({
        ':root': {
          '--mp-light-blue': '#31C1FF',
          '--mp-dark-blue': '#138FFF',
          '--mp-grey': '#F1F4F6',
          '--mp-gray': 'var(--grey)',
          '--color-facebook': '#415a93',
          '--color-twitter': '#4aa0ec',
          '--color-instagram': '#d0426d',
          '--color-whatsapp': '#00B852',
          '--font-family-display': '"PT Sans", sans-serif',
          '--font-family-body': '"Hind", sans-serif',
          // Perfect Fourth Scale
          '--font-size-xs': '1rem',
          '--font-size-sm': '1.333rem',
          '--font-size-base': '1.777rem',
          '--font-size-lg': '2.368rem',
          '--font-size-xl': '3.157rem',
          '--font-size-2xl': '4.209rem',
          '--font-size-3xl': '5.61rem',
          '--font-size-4xl': '7.478rem',
          '--inline-size-constraint': '1600px',
        },
        html: {
          overflowX: 'hidden',
          fontSize: '62.5%',
          scrollBehavior: 'smooth',
        },
        body: {
          textRendering: 'optimizeLegibility',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          fontSmoothing: config('theme.fontSmoothing.antialiased'),
          fontFamily: config('theme.fontFamily.body'),
          fontWeight: config('theme.fontWeight.normal'),
          fontSize: config('theme.fontSize.base'),
        },
        '.webkit-mask-image': {
          '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
        },
      });
    }),
  ],
};
