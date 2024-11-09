import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'
import Login from './pages/Login'
import SignUpPage from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import EditProfile from './pages/EditProfile'

function App() {
  return (
    <div>    
      <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/editprofile" element={<EditProfile />} />
      
      </Routes>
      
    </div>
  )
}

export default App
