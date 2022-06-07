import { createContext, useState } from 'react'

export const CityContext = createContext({
  city: {},
  setCity: (city) => {},
  cities: [],
  setCities: (cities) => {}
})

const CityProvider = ({ children }) => {
  const [city, setCity] = useState()
  const [cities, setCities] = useState([])

  return (
    <CityContext.Provider value={{ city, setCity, cities, setCities }}>
        {
          children
        }
    </CityContext.Provider>
  )
}

export default CityProvider
