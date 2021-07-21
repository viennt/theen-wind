import template from './template.hbs';
import { mainMenus } from 'Themes/constants';

const index = {
  template,
  props: { mainMenus },
  thumbnail: '/images/blocks/header-03.png',
};

export default index;