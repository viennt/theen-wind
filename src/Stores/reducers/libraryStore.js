import { callingApiActions, callingApiTypes } from '../utils';

const ENTITY = 'LIBRARY';

export const initialState = {
  data: [],
};

/** SELECTORS */
export const getLibraryItems = state => state.library.data;

/** UPDATE ACTION TYPES & ACTIONS */
export const [UPDATING] = callingApiTypes(ENTITY, 'update');
export const [updating] = callingApiActions(ENTITY, 'update');

const libraryReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATING:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};

export default libraryReducers;
