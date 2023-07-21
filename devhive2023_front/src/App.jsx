import React from 'react'
import Index from './pages/Index'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Semesters from './pages/semesters'
import Registration from './utils/registration'
import Results from './pages/results'
import Viewresults from './utils/viewresults'
import Profile from './pages/profile'
import Notification from './pages/notification'
import Medical from './pages/medical'
import Courses from './pages/courses'
import General from './utils/courses/general'
import Civil from './utils/courses/civil'
import Com from './utils/courses/com'
import Elec from './utils/courses/elec'
import Mech from './utils/courses/mech'
import Complementary from './utils/courses/complementary'
import Change_password from './pages/change_password'
import ErrorPage from './pages/ErrorPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index className='vh-100 overflow-hidden' />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='change_password' element={<Change_password />} />
        <Route path='/semesters' element={<Semesters />} />
        <Route path='/semesters/registration' element={<Registration />} />
        <Route path='/results' element={<Results />} />
        <Route path='/results/viewresults' element={<Viewresults />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/medical' element={<Medical />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/general' element={<General />} />
        <Route path='/courses/civil' element={<Civil />} />
        <Route path='/courses/com' element={<Com />} />
        <Route path='/courses/elec' element={<Elec />} />
        <Route path='/courses/mech' element={<Mech />} />
        <Route path='/courses/complementary' element={<Complementary />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App