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
import Courses from './pages/courses'
import General from './utils/courses/general'
import Civil from './utils/courses/civil'
import Com from './utils/courses/com'
import Elec from './utils/courses/elec'
import Mech from './utils/courses/mech'
import Complementary from './utils/courses/complementary'

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
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/courses/general' element={<General />}></Route>
        <Route path='/courses/civil' element={<Civil />}></Route>
        <Route path='/courses/com' element={<Com />}></Route>
        <Route path='/courses/elec' element={<Elec />}></Route>
        <Route path='/courses/mech' element={<Mech />}></Route>
        <Route path='/courses/complementary' element={<Complementary />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App