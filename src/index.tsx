import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';

// import './styles/styles.scss';
import GlobalStyles from './styles/global-styles';

import App from './components/app/App'
import { store } from './store/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

