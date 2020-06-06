import React from 'react'
import { Provider } from 'react-redux'
import { Router } from './navigation/router'
import store from './state/store'
import GlobalStyles from './ui/styles/global'

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Router />
  </Provider>
)

export default App
