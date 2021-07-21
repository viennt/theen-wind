const fs = require('fs');
const path = require('path');

const getListGroups = theme => {
  try {
    const groups = fs.readdirSync(path.join(__dirname, `../../src/Themes/${theme}`));
    return groups.filter(group => !group.endsWith('.js'));
  } catch (e) {
    return [];
  }
}

module.exports = getListGroups;
