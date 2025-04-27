import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Contact from './pages/contact'
import About from './pages/about'

import Home from './pages/home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
            <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
     <Footer />
    </>
  )
}

export default App
