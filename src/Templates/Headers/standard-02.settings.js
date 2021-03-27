import template from './standard-02.hbs';

const settings = {
  review: '/images/blocks/header-02.png',
  template,
  props: {
    mainMenus: [
      { label: 'Home', url: '#_' },
      { label: 'Services', url: '#_' },
      { label: 'Projects', url: '#_' },
      { label: 'About', url: '#_' },
    ],
  }
};

export default settings;