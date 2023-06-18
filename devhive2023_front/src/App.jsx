import React from 'react'
import Index from './pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Semesters from './pages/semesters'
import Registration from './utils/registration'
import Results from './pages/results'
import Viewresults from './utils/viewresults'
import Profile from './pages/profile'
import Notification from './pages/notification'
import Medical from './pages/medical'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index className='vh-100 overflow-hidden' />} ></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/semesters' element={<Semesters />}></Route>
        <Route path='/semesters/registration' element={<Registration />}></Route>
        <Route path='/results' element={<Results />}></Route>
        <Route path='/results/viewresults' element={<Viewresults />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/notification' element={<Notification />}></Route>
        <Route path='/medical' element={<Medical />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App