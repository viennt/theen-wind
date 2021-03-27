import { callingApiActions, callingApiTypes } from '../utils';
import { VIEW_TYPES } from '../../constants';

const ENTITY = 'SETTINGS';

export const initialState = {
  data: {
    view: VIEW_TYPES.EDITOR, // CODE, EDITOR, DESKTOP, TABLET, PHONE
    borders: {
      radius: {
        topLeft: 'rounded-tl-md',
        topRight: 'rounded-tr-md',
        bottomLeft: 'rounded-bl-md',
        bottomRight: 'rounded-br-md',
      }
    },
    colors: {
      primary: {
        name: 'gray',
        normal: 500,
        lighter: 400,
        darker: 600,
      }
    }
  },
};

/** SELECTORS */
export const getSettings = state => state.settings.data;

export const getSettingView = state => state.settings.data.view;

export const getSettingColors = state => state.settings.data.colors;

export const getSettingPrimaryColorName = state => state.settings.data.colors?.primary.name;
export const getSettingPrimaryColorOpacity = state => state.settings.data.colors?.primary.normal;

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
