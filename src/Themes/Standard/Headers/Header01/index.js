import template from './template.hbs';
import { mainMenus } from 'Themes/constants';

const index = {
  template,
  props: { mainMenus },
  thumbnail: '/images/blocks/header-01.png',
};

export default index;