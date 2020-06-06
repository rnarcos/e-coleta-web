import React from 'react';
import { Provider } from 'react-redux';
import { Router } from './navigation/router.js';
import store from './state/store.js';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
