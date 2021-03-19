import standardHeaderTemplate from './Headers/standard.hbs';
import standardHeaderSettings from './Headers/standard.settings';
import standardBannerTemplate from './Banners/standard.hbs';
import standardBannerSettings from './Banners/standard.settings';
import standardFooterTemplate from './Footers/standard.hbs';
import standardFooterSettings from './Footers/standard.settings';
import waveDividerTemplate from './Dividers/wave.hbs';
import waveDividerSettings from './Dividers/wave.settings';

export const templates = {
  'StandardHeader': {
    template: standardHeaderTemplate,
    settings: standardHeaderSettings,
  },
  'StandardBanner': {
    template: standardBannerTemplate,
    settings: standardBannerSettings,
  },
  'StandardFooter': {
    template: standardFooterTemplate,
    settings: standardFooterSettings,
  },
  'WaveDivider': {
    template: waveDividerTemplate,
    settings: waveDividerSettings,
  }
}