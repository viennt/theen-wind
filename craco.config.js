const rawLoader = require('craco-raw-loader')

module.exports = {
  plugins: [
    {
      plugin: rawLoader,
      options: { test: /\.hbs$/ }
    }
  ],
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}