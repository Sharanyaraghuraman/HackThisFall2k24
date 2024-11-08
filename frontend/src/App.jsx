import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'


function App() {
  return (
    <div>    
      <Routes>
      <Route index element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
