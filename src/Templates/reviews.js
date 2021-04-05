import { themeReviews as standardThemeReviews } from './StandardTheme/reviews';
import { themeReviews as steinThemeReviews } from './SteinTheme/reviews';

export const templateReviews = {
  ...standardThemeReviews,
  ...steinThemeReviews
}