import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App