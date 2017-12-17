import React from 'react';
import { Provider } from 'react-redux'
import App from './components/App'
import { render } from 'react-dom'
import configureStore from './configureStore'

// const store = createStore(reducer)
const store = configureStore()
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

