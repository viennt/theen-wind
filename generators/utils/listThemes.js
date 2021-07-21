const fs = require('fs');
const path = require('path');

const themes = fs.readdirSync(path.join(__dirname, '../../src/Themes'));

const listThemes = themes
  .filter(service => !service.endsWith('.js'))
  .sort();

module.exports = listThemes;
