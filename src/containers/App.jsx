import { useState } from 'react'
import './App.css'
import Nav from '../components/Nav.jsx'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import City from './City'
import Footer from '../components/Footer'
import AboutButton from '../components/AboutButton'
// import data from '../data.js'

const App = () => {
  const [cities, setCities] = useState([])
  const [city, setCity] = useState()
  return (
    <div className="container">
      <Nav
        setCities={setCities}
        cities={cities}
      />

      <Routes>
        <Route
          path='/'
          element={<Home setCities={setCities} setCity={setCity} cities={cities}/>}
        />
        <Route path='/about' element={<About />} />
        <Route exact path="/city/:id" element={<City city={city} />} />
      </Routes>
      <div className='md-show'>
        <AboutButton />
      </div>
      <Footer />
    </div>
  )
}

export default App
