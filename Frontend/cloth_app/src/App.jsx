import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Carousel from './components/Carousel'
import CustomNavbar from './components/header/CustomNav'
import Footer from './components/footer/Footer'
import ContactForm from './pages/Contact'
import Home from './pages/Home' // You'll need to create this component

const App = () => {
  return (
  
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
   
  )
}

export default App