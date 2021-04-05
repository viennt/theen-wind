import { callingApiActions, callingApiTypes } from '../utils';
import { VIEW_TYPES } from 'Utils/constants';

const ENTITY = 'SETTINGS';

export const initialState = {
  data: {
    view: VIEW_TYPES.EDITOR, // CODE, EDITOR, DESKTOP, TABLET, PHONE
    fontFamily: {
      label: 'Default',
      value: '',
      href: ''
    },
    loadedFonts: {},
    borders: {
      radius: {
        topLeft: 'rounded-tl-md',
        topRight: 'rounded-tr-md',
        bottomLeft: 'rounded-bl-md',
        bottomRight: 'rounded-br-md',
      }
    },
    colors: {
      name: 'gray',
      normal: 500,
      lighter: 400,
      darker: 600,
    }
  },
};

/** SELECTORS */
export const getSettings = state => state.settings.data;

export const getSettingView = state => state.settings.data.view;
export const getSettingFontFamily = state => state.settings.data.fontFamily;

export const getSettingColors = state => state.settings.data.colors;
export const getSettingColorName = state => state.settings.data.colors?.name;
export const getSettingColorOpacity = state => state.settings.data.colors?.normal;

export const getSettingBorders = state => state.settings.data.borders;
export const getSettingBorderRadius = state => state.settings.data.borders?.radius;

/** UPDATE ACTION TYPES & ACTIONS */
export const [UPDATING] = callingApiTypes(ENTITY, 'update');
export const [updating] = callingApiActions(ENTITY, 'update');

const settingsReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATING:
      return { ...state, data: {...state.data, ...action.payload} };
    default:
      return state;
  }
};

export default settingsReducers;
