import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomNavbar from './components/header/CustomNav'
import Footer from './components/footer/Footer'
import ContactForm from './pages/Contact'
import Home from './pages/Home'
import LoginModal from './pages/Login'
import SignupModal from './pages/SignUp'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  const handleLoginClose = () => setShowLogin(false)
  const handleSignupClose = () => setShowSignup(false)

  const handleLoginShow = () => setShowLogin(true)
  const handleSignupShow = () => setShowSignup(true)

  return (

      <div>
        <CustomNavbar onLoginClick={handleLoginShow} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        <Footer />

        <LoginModal
          show={showLogin}
          handleClose={handleLoginClose}
          switchToSignup={handleSignupShow}
        />

        <SignupModal
          show={showSignup}
          handleClose={handleSignupClose}
          switchToLogin={handleLoginShow}
        />
      </div>

  )
}

export default App
