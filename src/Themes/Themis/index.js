import { getMenuByGroupAndBlocks } from 'Utils/helpers';
import themeGroups from './groupsConfig';
import themeBlocks from './blocksConfig';

export const blocks = themeBlocks;
export const menus = getMenuByGroupAndBlocks(themeGroups, themeBlocks);