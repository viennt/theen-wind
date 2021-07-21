import { themeBlocks as standardBlocks, menus as standardMenus } from './Standard';
import { blocks as themisBlocks, menus as themisMenus } from './Themis';

export const menus = {
  standard: standardMenus,
  themis: themisMenus
}

export const themes = {
  ...standardBlocks,
  ...themisBlocks,
}