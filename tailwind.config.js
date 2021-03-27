const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx,hbs}',
      './public/index.html'
    ],
    options: {
      safelist: [/^bg-/, /^border-/, /^text-/, /^rounded-/],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover'],
      fontSize: ['hover'],
      divideColor: ['group-hover'],
    },
  },
  plugins: [],
}
