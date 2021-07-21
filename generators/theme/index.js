const actionsMenu = require('./actions');

module.exports = {
  description: 'Add a theme',
  prompts: [
    {
      type: 'input',
      name: 'themeName',
      message: 'What should the theme be called?',
      default: 'Theme',
      validate: value => /.+/.test(value) || 'The name is required',
    },
  ],
  actions: () => {
    const actions = [...actionsMenu];
    return actions;
  },
};
