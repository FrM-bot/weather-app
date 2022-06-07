import { lazy, Suspense, useContext } from 'react'
import { CityContext } from '../context/city.context'
// import Card from './Card.jsx';

const Card = lazy(() => import('./Card'))

const Cards = () => {
  const { cities, setCities, setCity } = useContext(CityContext)
  const handlerClose = (cityIdToClose) => {
    const newArrayCities = cities?.filter(({ id }) => id !== cityIdToClose)
    setCities(newArrayCities)
  }
  return (
    <div className='flex-wrap gap-2 my-4'>
      {
        cities?.map(city => (
          <Suspense key={city?.id} fallback={<div className='spinner'/>}>
            <div className='flexible' onClick={() => setCity(city)}>
              <Card
                id={city?.id}
                temp_max={city?.main.temp_max}
                temp_min={city?.main.temp_min}
                name={city?.name}
                img={city?.weather[0].icon}
                onClose={() => handlerClose(city?.id)}
                />
              </div>
          </Suspense>
        ))
      }
    </div>
  )
}

export default Cards
