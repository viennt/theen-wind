import { callingApiActions, callingApiTypes } from '../utils';

const ENTITY = 'EDITOR';

export const initialState = {
  data: [],
};

/** SELECTORS */
export const getEditorItems = state => state.editor.data;

/** UPDATE ACTION TYPES & ACTIONS */
export const [UPDATING] = callingApiTypes(ENTITY, 'update');
export const [updating] = callingApiActions(ENTITY, 'update');

/** REMOVE ACTION TYPES & ACTIONS */
export const [REMOVE] = callingApiTypes(ENTITY, 'remove');
export const [removing] = callingApiActions(ENTITY, 'remove');

const editorReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATING:
      return { ...state, data: [...action.payload] };
    case REMOVE:
      const newData = state.data.filter(({ id }) => id !== action.payload)
      return { ...state, data: [...newData] };
    default:
      return state;
  }
};

export default editorReducers;
