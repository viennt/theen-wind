import { combineReducers } from 'redux';

import settingsReducers from './reducers/settingsStore';
import libraryReducers from './reducers/libraryStore';
import editorReducers from './reducers/editorStore';

const rootReducer = combineReducers({
  settings: settingsReducers,
  library: libraryReducers,
  editor: editorReducers,
});

export default rootReducer;
