import template from './standard.hbs';

const settings = {
  review: '/images/blocks/header-01.png',
  template: {
    html: template,
    mainMenus: [
      { label: 'Home', url: '#_' },
      { label: 'About', url: '#_' }
    ],
  }
};

export default settings;