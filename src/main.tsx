import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import './index.css'
import store from "./redux/store";

const basename = ''

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <App/>
    </BrowserRouter>
  </Provider>,
)
