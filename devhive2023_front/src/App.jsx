import React from 'react'
import Index from './pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} className='vh-100 overflow-hidden'></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App