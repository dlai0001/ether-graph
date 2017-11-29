import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ThemedApp = () => (
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
);


ReactDOM.render(
  <Provider store={store}>
    <ThemedApp/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
