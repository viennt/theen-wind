import { v4 as uuidv4 } from 'uuid';
import { callingApiActions, callingApiTypes } from '../utils';

const ENTITY = 'EDITOR';
export const initialState = { data: [] };

/** SELECTORS */
export const getEditorItems = state => state.editor.data;

/** UPDATE ACTION TYPES & ACTIONS */
export const [UPDATING] = callingApiTypes(ENTITY, 'update');
export const [updating] = callingApiActions(ENTITY, 'update');

/** REMOVE ACTION TYPES & ACTIONS */
export const [REMOVING] = callingApiTypes(ENTITY, 'remove');
export const [removing] = callingApiActions(ENTITY, 'remove');

/** MOVE ACTION TYPES & ACTIONS */
export const [MOVING] = callingApiTypes(ENTITY, 'move');
export const [moving] = callingApiActions(ENTITY, 'move');

/** REORDER ACTION TYPES & ACTIONS */
export const [REORDERING] = callingApiTypes(ENTITY, 'reorder');
export const [reordering] = callingApiActions(ENTITY, 'reorder');

const editorReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATING:
      return { ...state, data: [...action.payload] };

    case REMOVING:
      const newData = state.data.filter(({ id }) => id !== action.payload)
      return { ...state, data: [...newData] };

    case MOVING:
      const destination = [...state.data];
      const { item, index } = action.payload;
      destination.splice(index, 0, {...item, id: uuidv4()});
      return { ...state, data: destination };

    case REORDERING:
      const { startIndex, endIndex } = action.payload;
      const data = [...state.data];
      const [removed] = data.splice(startIndex, 1); // Remove from start position
      data.splice(endIndex, 0, removed); // Add to end position
      return { ...state, data: data };

    default:
      return state;
  }
};

export default editorReducers;
