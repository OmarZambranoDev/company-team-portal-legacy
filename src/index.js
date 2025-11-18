import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state/redux/store'
import { AppStateProvider } from './state/contexts/AppStateContext'
import App from './App'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </Provider>,
  document.getElementById('root')
)