import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
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

