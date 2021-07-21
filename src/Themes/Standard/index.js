import { getMenuByGroupAndBlocks } from 'Utils/helpers';

// -- GENERATOR: APPEND IMPORT BLOCK HERE --
import StandardHeader01 from './Headers/Header01';
import StandardHeader02 from './Headers/Header02';
import StandardHeader03 from './Headers/Header03';

import StandardBanner01 from './Banners/Banner01';
import StandardBanner02 from './Banners/Banner02';
import StandardCTA01 from './CTAs/CTA01';
import StandardContent01 from './Contents/Content01';
import StandardFooter01 from './Footers/Footer01';

const themeGroups = {
// -- GENERATOR: APPEND GROUP THEME HERE --
  Headers: 'Headers',
  Banners: 'Banners',
  Contents: 'Contents',
  CTAs: 'Call To Actions',
  Footers: 'Footers',
};

export const themeBlocks = {
// -- GENERATOR: APPEND BLOCK THEME HERE --
  'Standard::Headers::Header01': StandardHeader01,
  'Standard::Headers::Header02': StandardHeader02,
  'Standard::Headers::Header03': StandardHeader03,
  'Standard::Banners::Banner01': StandardBanner01,
  'Standard::Banners::Banner02': StandardBanner02,
  'Standard::CTAs::CTA01': StandardCTA01,
  'Standard::Contents::Content01': StandardContent01,
  'Standard::Footers::Footer01': StandardFooter01,
};

export const menus = getMenuByGroupAndBlocks(themeGroups, themeBlocks);
