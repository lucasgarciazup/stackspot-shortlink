import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './core/styles/global'
import App from './App'

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </>,
  document.getElementById('root')
)
