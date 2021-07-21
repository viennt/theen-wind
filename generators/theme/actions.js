module.exports = [
  {
    type: 'add',
    path: '../src/Themes/{{ properCase themeName }}/index.js',
    templateFile: './theme/hbs/index.js.hbs',
    abortOnFail: true,
  },
];
