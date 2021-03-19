import { v4 as uuidv4 } from 'uuid';
import { callingApiActions, callingApiTypes } from '../utils';

const ENTITY = 'LIBRARY';

export const initialState = {
  data: [
    { id: uuidv4(), block: 'StandardHeader'},
    { id: uuidv4(), block: 'StandardBanner'},
    { id: uuidv4(), block: 'StandardFooter'},
  ],
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
