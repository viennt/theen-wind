import { callingApiActions, callingApiTypes } from '../utils';

const ENTITY = 'THEME';

export const initialState = { data: [] };

/** SELECTORS */
export const getThemeItems = state => state.theme.data;

/** UPDATE ACTION TYPES & ACTIONS */
export const [UPDATING] = callingApiTypes(ENTITY, 'update');
export const [updating] = callingApiActions(ENTITY, 'update');

const themeReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATING:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};

export default themeReducers;
