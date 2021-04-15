import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

import App from './App';
import reportWebVitals from './reportWebVitals';

import configureStore from './Stores/configureStore';
const store = configureStore();

/* eslint-disable no-underscore-dangle */
if (process.env.NODE_ENV === 'development') {
  import('./tailwind.css');
} else {
  ReactGA.initialize('G-2SDDS9D9CP');
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
