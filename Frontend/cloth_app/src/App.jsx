import React from 'react'
// import Navigation from './components/header/Navigation'
import Carousel from './components/Carousel'
import CustomNavbar from './components/header/CustomNav'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <CustomNavbar/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default App