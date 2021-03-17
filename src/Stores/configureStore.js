import { createStore, compose } from 'redux';
import rootReducers from './reducers';

const enhancers = [];

/* eslint-disable no-underscore-dangle */
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}
/* eslint-enable */

const composedEnhancers = compose(
  ...enhancers
);

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducers, initialState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducers);
      });
    }
  }

  return store;
};
export default configureStore;
