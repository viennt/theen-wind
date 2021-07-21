module.exports = [
  {
    type: 'add',
    path: '../src/Themes/{{ properCase themeName }}/{{ properCase (plural groupName) }}/{{ properCase blockName }}/index.js',
    templateFile: './block/hbs/index.js.hbs',
    abortOnFail: true,
  },
  {
    type: 'add',
    path: '../src/Themes/{{ properCase themeName }}/{{ properCase (plural groupName) }}/{{ properCase blockName }}/template.hbs',
    templateFile: './block/hbs/template.hbs.hbs',
    abortOnFail: true,
  },
  {
    type: 'modify',
    path: '../src/Themes/{{ properCase themeName }}/index.js',
    pattern: /(\/\/ -- GENERATOR: APPEND IMPORT BLOCK HERE --)/gi,
    templateFile: './block/hbs/update-index-block-import.hbs',
    abortOnFail: true,
  },
  {
    type: 'modify',
    path: '../src/Themes/{{ properCase themeName }}/index.js',
    pattern: /(\/\/ -- GENERATOR: APPEND GROUP THEME HERE --)/gi,
    templateFile: './block/hbs/update-index-group-theme.hbs',
    abortOnFail: true,
  },
  {
    type: 'modify',
    path: '../src/Themes/{{ properCase themeName }}/index.js',
    pattern: /(\/\/ -- GENERATOR: APPEND BLOCK THEME HERE --)/gi,
    templateFile: './block/hbs/update-index-block-theme.hbs',
    abortOnFail: true,
  },
];
