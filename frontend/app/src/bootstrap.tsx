import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@citric/core'
import { GlobalStyle } from './core/styles/global'
import App from './App'
import theme from './theme'

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
)
