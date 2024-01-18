import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import AboutUs from './pages/AboutUs'
import Header from './Header'
import Review from './Review'
import Footer from './Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' Component={Landing} />
          <Route path='/about' Component={AboutUs} />
          <Route path='/about-us' Component={AboutUs} />
        </Routes>
        <Review />
        <Footer />
      </Router>
    </>
  )
}

export default App
