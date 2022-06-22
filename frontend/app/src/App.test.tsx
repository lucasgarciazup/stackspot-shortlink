import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('Renders Home and info', () => {
    window.history.pushState({}, 'Test App', '/home')
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    expect(screen.getByText('Home')).toBeTruthy()
  })
})
