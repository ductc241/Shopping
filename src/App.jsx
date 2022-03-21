import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from "react-redux";
import store from './redux/store';

// setup project here

import Application from './containers/Application'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Provider>
  )
}

export default App
