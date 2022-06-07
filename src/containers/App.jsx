import React from 'react'
import './App.css'
import Nav from '../components/Nav.jsx'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import City from './City'
import Footer from '../components/Footer'
import AboutButton from '../components/AboutButton'

const App = () => {
  return (
    <div className="container">
      <Nav/>

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route path='/about' element={<About />} />
        <Route exact path="/city/:id" element={<City />} />
      </Routes>
      <div className='md-show'>
        <AboutButton />
      </div>
      <Footer />
    </div>
  )
}

export default App
