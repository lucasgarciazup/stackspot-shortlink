import React from 'react'
import { Route, NavLink, Routes, Navigate } from 'react-router-dom'

import Login from 'pages/Login'
import Application from 'pages/Application'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<Application />} />
        <Route path="/404" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/404" />} /> */}
      </Routes>
    </>
  )
}

export default App
