const pluralize = require('pluralize');
const listThemes = require('../utils/listThemes');
const getListBlocks = require('../utils/getListBlocks');
const getListGroups = require('../utils/getListGroups');
const actionsMenu = require('./actions');

module.exports = {
  description: 'Add a block',
  prompts: [
    {
      type: 'list',
      name: 'themeName',
      message: 'Choose theme:',
      choices: listThemes,
    },
    {
      type: 'input',
      name: 'groupName',
      message: 'Group name:',
      default: 'header',
      validate: value => /.+/.test(value) || 'The name is required',
      filter: (inputGroup, answer) => {
        const groups = getListGroups(answer.themeName);
        const existGroup = groups.find(group => group.toLowerCase() === pluralize.plural(inputGroup.toLowerCase()));
        if (existGroup && inputGroup !== existGroup) {
          return existGroup;
        } else {
          return pluralize.plural(inputGroup);
        }
      },
    },
    {
      type: 'input',
      name: 'blockName',
      message: 'Block name:',
      default: answer => {
        const blocks = getListBlocks(answer.themeName, answer.groupName);
        const blockId = blocks.length + 1 > 10 ? blocks.length + 1 : `0${blocks.length + 1}`
        return `${pluralize.singular(answer.groupName)}${blockId}`
      },
      validate: value => /.+/.test(value) || 'The name is required',
    },
  ],
  actions: () => {
    const actions = [...actionsMenu];
    return actions;
  },
};
