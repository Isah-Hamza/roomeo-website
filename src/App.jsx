import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import AboutUs from './pages/AboutUs'
import Header from './Header'
import Review from './Review'
import Footer from './Footer'

function App() {

  return (
    <>
      <Header />
      <AboutUs />
      <Review />
      <Footer />
    </>
  )
}

export default App
