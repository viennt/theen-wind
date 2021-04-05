import React from 'react';
import { ROUTES } from 'Routes';
import { v4 as uuidv4 } from 'uuid';
import { FiShoppingBag, FiSettings } from 'react-icons/fi';

export const NAVIGATIONS = [
  { label: ROUTES.store.title, url: ROUTES.library.url, icon: <FiShoppingBag/> },
  // { label: ROUTES.store.title, url: ROUTES.store.url, icon: <FiLayers/> },
  { label: ROUTES.settings.title, url: ROUTES.settings.url, icon: <FiSettings/> },
]

export const INITIAL_LIB_ITEMS = [
  { id: uuidv4(), name: 'Header', blocks: [
      { id: uuidv4(), block: 'Standard::Header01'},
      { id: uuidv4(), block: 'Standard::Header02'},
      { id: uuidv4(), block: 'Standard::Header01'},
      { id: uuidv4(), block: 'Standard::Header02'},
    ]},
  { id: uuidv4(), name: 'Banner', blocks: [
      { id: uuidv4(), block: 'Standard::Banner01'},
      { id: uuidv4(), block: 'Standard::Banner01'},
    ]},
  { id: uuidv4(), name: 'Content', blocks: [
      { id: uuidv4(), block: 'Standard::Content01'},
      { id: uuidv4(), block: 'Standard::Content01'},
    ]},
  { id: uuidv4(), name: 'Footer', blocks: [
      { id: uuidv4(), block: 'Standard::Footer01'},
      { id: uuidv4(), block: 'Standard::Footer01'},
    ]},
];

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
  { label: 'Default', value: '', href: '' },
  { label: 'Open Sans', value: 'Open Sans', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap' },
  { label: 'Work Sans', value: 'Work Sans', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap' },
  { label: 'Prompt', value: 'Prompt', href: 'https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap' },
  { label: 'Raleway', value: 'Raleway', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap' },
  { label: 'Montserrat', value: 'Montserrat', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap' },
  { label: 'Nunito Sans', value: 'Nunito Sans', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,400&display=swap' },
  { label: 'Source Sans', value: 'Source Sans', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,400&display=swap' },
  { label: 'Roboto', value: 'Roboto', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400;1,500&display=swap' },
  { label: 'Lato', value: 'Lato', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap' },
  { label: 'Lora', value: 'Lora', href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'Noto Sans', value: 'Noto Sans', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap' },
  { label: 'PT Sans', value: 'PT Sans', href: 'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap' },
  { label: 'Oswald', value: 'Oswald', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap' },
  { label: 'Concert One', value: 'Concert One', href: 'https://fonts.googleapis.com/css2?family=Concert+One&display=swap' },
  { label: 'Slabo 27px', value: 'Slabo 27px', href: 'https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap' },
  { label: 'Muli', value: 'Muli', href: 'https://use.typekit.net/kfz5jhb.css' }
]