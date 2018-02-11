import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './firebase/firebase';
import { firebase } from './firebase/firebase';

import './style.css';

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
render(app, document.querySelector('.root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('logged in')
  }
  else {
    console.log('logged out')
  }
});
