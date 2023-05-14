import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Tooltip from './Pages/Tooltip'
import SignUp from './Pages/SignUp'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}
