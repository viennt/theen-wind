import { v4 as uuidv4 } from 'uuid';
import { callingApiActions, callingApiTypes } from '../utils';

const ENTITY = 'EDITOR';

export const initialState = {
  data: [
    { id: uuidv4(), block: 'StandardHeader'},
  ],
};

/** SELECTORS */
export const getEditorItems = state => state.editor.data;

/** UPDATE ACTION TYPES & ACTIONS */
export const [UPDATING] = callingApiTypes(ENTITY, 'update');
export const [updating] = callingApiActions(ENTITY, 'update');

const editorReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATING:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};

export default editorReducers;
