const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx,hbs}',
      './public/index.html'
    ],
    options: {
      safelist: [/^bg-/, /^hover:bg-/, /^border-/, /^text-/, /^rounded-/, /^space-/],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        orange: colors.orange,
        lime: colors.lime,
        teal: colors.teal,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {
      // borderRadius: ['hover'],
      fontSize: ['hover'],
      display: ['group-hover'],
    },
  },
  plugins: [],
}
