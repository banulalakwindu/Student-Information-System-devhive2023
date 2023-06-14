import React from 'react'
import Index from './pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Semesters from './pages/semesters'
import Registration from './utils/registration'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index className='vh-100 overflow-hidden' />} ></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/semesters' element={<Semesters />}></Route>
        <Route path='/semesters/registration' element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App