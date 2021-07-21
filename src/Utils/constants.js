import React from 'react';
import { ROUTES } from 'Routes';
import { FiShoppingBag, FiSettings } from 'react-icons/fi';

export const NAVIGATIONS = [
  { label: ROUTES.store.title, url: ROUTES.library.url, icon: <FiShoppingBag/> },
  // { label: ROUTES.store.title, url: ROUTES.store.url, icon: <FiLayers/> },
  { label: ROUTES.settings.title, url: ROUTES.settings.url, icon: <FiSettings/> },
]

export const INITIAL_LIB_ITEMS = [
  { id: 'standard', label: 'Standard Theme', cover: '/images/themes/standard/thumbnail.png' },
  { id: 'themis', label: 'MyMedi Theme', cover: '' },
];

export const VIEW_TYPES = {
  CODE: 'code',
  EDITOR: 'editor',
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  PHONE: 'phone'
}

export const COLORS = [
  'Red', 'Orange', 'Yellow',
  'Lime', 'Green', 'Teal', 'Cyan', 'Blue',
  'Indigo', 'Purple', 'Fuchsia', 'Pink', 'Rose', 'Gray'
]
export const OPACITIES = [300, 400, 500, 600, 700];

export const BORDER_RADIUS = []

export const FONT_FAMILIES = [
  { label: 'Default', value: '', href: '' },
  { label: 'Abril Fatface', value: 'Abril Fatface', href: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap' },
  { label: 'Alegreya', value: 'Alegreya', href: 'https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'Archivo', value: 'Archivo', href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'Arvo', value: 'Arvo', href: 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400&display=swap' },
  { label: 'B612', value: 'B612', href: 'https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400;1,700&display=swap' },
  { label: 'BioRhyme', value: 'BioRhyme', href: 'https://fonts.googleapis.com/css2?family=BioRhyme:wght@200;300;400;700;800&display=swap' },
  { label: 'Cairo', value: 'Cairo', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap' },
  { label: 'Cardo', value: 'Cardo', href: 'https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap' },
  { label: 'Concert One', value: 'Concert One', href: 'https://fonts.googleapis.com/css2?family=Concert+One&display=swap' },
  { label: 'Cormorant', value: 'Cormorant', href: 'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap' },
  { label: 'Crimson Text', value: 'Crimson Text', href: 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap' },
  { label: 'Exo 2', value: 'Exo 2', href: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'Karla', value: 'Karla', href: 'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap' },
  { label: 'Fjalla One', value: 'Fjalla One', href: 'https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap' },
  { label: 'Fira Sans', value: 'Fira Sans', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'Frank Ruhl Libre', value: 'Frank Ruhl Libre', href: 'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500;700;900&display=swap' },
  { label: 'Lato', value: 'Lato', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap' },
  { label: 'Lora', value: 'Lora', href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'Merriweather', value: 'Merriweather', href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap' },
  { label: 'Montserrat', value: 'Montserrat', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap' },
  { label: 'Noto Sans', value: 'Noto Sans', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap' },
  { label: 'Muli', value: 'Muli', href: 'https://use.typekit.net/kfz5jhb.css' },
  { label: 'Nunito Sans', value: 'Nunito Sans', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap' },
  { label: 'Old Standard TT', value: 'Old Standard TT', href: 'https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap' },
  { label: 'Open Sans', value: 'Open Sans', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,70;1,400&display=swap' },
  { label: 'Oswald', value: 'Oswald', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap' },
  { label: 'Oxygen', value: 'Oxygen', href: 'https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap' },
  { label: 'Playfair Display', value: 'Playfair Display', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'Poppins', value: 'Poppins', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'Prompt', value: 'Prompt', href: 'https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'PT Sans', value: 'PT Sans', href: 'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap' },
  { label: 'Rakkas', value: 'Rakkas', href: 'https://fonts.googleapis.com/css2?family=Rakkas&display=swap' },
  { label: 'Raleway', value: 'Raleway', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'Roboto', value: 'Roboto', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500&display=swap' },
  { label: 'Rubik', value: 'Rubik', href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&display=swap' },
  { label: 'Slabo 27px', value: 'Slabo 27px', href: 'https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap' },
  { label: 'Source Sans', value: 'Source Sans', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap' },
  { label: 'Titillium Web', value: 'Titillium Web', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap' },
  { label: 'Ubuntu', value: 'Ubuntu', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500&display=swap' },
  { label: 'Varela', value: 'Varela', href: 'https://fonts.googleapis.com/css2?family=Varela&display=swap' },
  { label: 'Vollkorn', value: 'Vollkorn', href: 'https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
  { label: 'Yatra One', value: 'Yatra One', href: 'https://fonts.googleapis.com/css2?family=Yatra+One&display=swap' },
  { label: 'Work Sans', value: 'Work Sans', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap' },
]