import React from 'react';
import { FiShoppingBag, FiLayers, FiSettings } from 'react-icons/fi';

const LibraryPage = React.lazy(() => import('Components/Layouts/Routes/LibraryPage'));
const StorePage = React.lazy(() => import('Components/Layouts/Routes/StorePage'));
const SettingPage = React.lazy(() => import('Components/Layouts/Routes/SettingPage'));

export const ROUTES = [
  { title: 'Settings', url: '/settings', icon: <FiSettings/>, component: <SettingPage/> },
  { title: 'Store', url: '/store', icon: <FiShoppingBag/>, component: <StorePage/> },
  { title: 'Library', url: '', icon: <FiLayers/>, component: <LibraryPage/> },
]

export const VIEW_TYPES = {
  CODE: 'code',
  EDITOR: 'editor',
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  PHONE: 'phone'
}

export const COLORS = [
  'Red', 'Orange', 'Amber', 'Yellow',
  'Lime', 'Green', 'Emerald', 'Teal', 'Cyan', 'Blue',
  'Indigo', 'Violet', 'Purple', 'Fuchsia', 'Pink', 'Rose', 'Gray'
]
export const OPACITIES = [300, 400, 500, 600, 700];

export const BORDER_RADIUS = []

export const FONT_FAMILIES = [
  { label: 'Default', value: '' },
  { label: 'Open Sans', value: 'Open Sans' },
  { label: 'Work Sans', value: 'Work Sans' },
  { label: 'Prompt', value: 'Prompt' },
  { label: 'Raleway', value: 'Raleway' },
  { label: 'Montserrat', value: 'Montserrat' },
  { label: 'Nunito Sans', value: 'Nunito Sans' },
  { label: 'Source Sans', value: 'Source Sans' },
  { label: 'Roboto', value: 'Roboto' },
  { label: 'Lato', value: 'Lato' },
  { label: 'Lora', value: 'Lora' },
  { label: 'Noto Sans', value: 'Noto Sans' },
  { label: 'PT Sans', value: 'PT Sans' },
  { label: 'Oswald', value: 'Oswald' },
  { label: 'Concert One', value: 'Concert One' },
  { label: 'Slabo 27px', value: 'Slabo 27px' },
  { label: 'Muli', value: 'Muli' }
]