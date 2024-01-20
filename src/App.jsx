import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import AboutUs from './pages/AboutUs'
import Header from './Header'
import Review from './Review'
import Footer from './Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateAccount from './pages/CreateAccount'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Landing} />
          <Route path='/about' Component={AboutUs} />
          <Route path='/about-us' Component={AboutUs} />
          <Route path='/create-account' Component={CreateAccount} />
        </Routes>
      </Router>
    </>
  )
}

export default App
