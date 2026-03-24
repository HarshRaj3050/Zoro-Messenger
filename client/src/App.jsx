import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/user/chat/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import VerifyEmail from './pages/auth/VerifyEmail'



const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App