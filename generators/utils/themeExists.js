const fs = require('fs');
const path = require('path');
const pluralize = require('pluralize');

const themes = fs.readdirSync(
  path.join(__dirname, '../../src/Themes')
);

function themeExists(comp) {
  return themes.indexOf(pluralize.singular(comp)) >= 0;
}

module.exports = themeExists;
