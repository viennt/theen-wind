import { combineReducers } from 'redux';

import settingsReducers from './reducers/settingsStore';
import libraryReducers from './reducers/libraryStore';
import editorReducers from './reducers/editorStore';
import themeReducers from './reducers/themeStore';

const rootReducer = combineReducers({
  settings: settingsReducers,
  library: libraryReducers,
  editor: editorReducers,
  theme: themeReducers,
});

export default rootReducer;
