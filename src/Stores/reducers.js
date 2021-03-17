import { combineReducers } from 'redux';

import settingsReducers from './reducers/settingsStore';

const rootReducer = combineReducers({
  settings: settingsReducers,
});

export default rootReducer;
