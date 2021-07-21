/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const pluralize = require('pluralize');

const themeGenerator = require('./theme/index.js');
const blockGenerator = require('./block/index.js');

const partials = require('./utils/partials');

/**
 * Every generated backup file gets this extension
 * @type {string}
 */
const BACKUPFILE_EXTENSION = 'rbgen';

module.exports = plop => {
  plop.setWelcomeMessage("Let's cook");
  plop.setGenerator('theme', themeGenerator);
  plop.setGenerator('block', blockGenerator);
  //
  plop.setHelper('plural', txt => pluralize.plural(txt));
  plop.setHelper('singular', txt => pluralize.singular(txt));
  //
  if (partials) {
    partials.forEach(partial => plop.setPartial(partial.key, partial.value));
  }

  //
  plop.setHelper('directory', comp => {
    try {
      fs.accessSync(path.join(__dirname, `../src/Containers/${comp}`), fs.F_OK);
      return `Containers/${comp}`;
    } catch (e) {
      return `Components/${comp}`;
    }
  });
  plop.setHelper('curly', (object, open) => (open ? '{' : '}'));
};

module.exports.BACKUPFILE_EXTENSION = BACKUPFILE_EXTENSION;
