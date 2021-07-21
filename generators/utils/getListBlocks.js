const fs = require('fs');
const path = require('path');

const getListBlocks = (theme, group) => {
  try {
    const blocks = fs.readdirSync(path.join(__dirname, `../../src/Themes/${theme}/${group}`));
    return blocks.filter(block => !block.endsWith('.js'));
  } catch (e) {
    return [];
  }
}

module.exports = getListBlocks;
