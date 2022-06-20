import React from 'react'
import { Home } from 'containers/Home'
import { Route, NavLink, Routes } from 'react-router-dom'

import Styled from './styled'

const App = () => {
  return (
    <>
      <Styled.Container>
        <Home />
        <Styled.Navigation>
          <NavLink to="home">Home</NavLink>
          <NavLink to="info">Info</NavLink>
        </Styled.Navigation>
        <Routes>
          <Route
            path="/home"
            element={<Styled.Content>Home Route</Styled.Content>}
          />
          <Route
            path="/info"
            element={
              <Styled.Content>
                For more informations please visit the
                <a href="https://github.com/ZupIT/stack-foundation-web">
                  documentation
                </a>
              </Styled.Content>
            }
          />
        </Routes>
      </Styled.Container>
    </>
  )
}

export default App
