import { callingApiActions, callingApiTypes, initialSettingState } from '../utils';

const ENTITY = 'SETTINGS';

/** UPDATE ACTION TYPES & ACTIONS */
export const [UPDATING] = callingApiTypes(ENTITY, 'update');
export const [updating] = callingApiActions(ENTITY, 'update');

const settingsReducers = (state = initialSettingState, action) => {
  switch (action.type) {
    case UPDATING:
      return { ...state, data: {...state.data, ...action.payload} };
    default:
      return state;
  }
};

export default settingsReducers;
