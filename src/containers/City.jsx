import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import GoogleMaps from '../components/GoogleMaps'
import { GET_CITY } from '../services/GET_CITY'
import './City.css'

const City = ({ city }) => {
  const { id } = useParams()
  const [cityPage, setCityPage] = useState()
  useEffect(() => {
    if (!city) {
      GET_CITY({ id }).then((res) => {
        setCityPage(res)
      }).catch(alert)
    }
    city && setCityPage(city)
  }, [city])

  if (!cityPage) return <div className='min-h-50vw center'><div className='spinner' /></div>
  return (
    <main className="">
      <Link to="/">
        <Button>
          Back
        </Button>
      </Link>
      <div className="grid-c2-responsive-md gap-2 my-4">
        <div className='card'>
          <div className='flex col align-x gap-4'>
            <h2 className='p-2'>{cityPage.name}</h2>
            <img src={`http://openweathermap.org/img/wn/${cityPage?.weather[0].icon}@4x.png`} />
          </div>
          <div className="info">
            <p>Temperatura: <span>{cityPage.main.temp} ºC</span></p>
            <p>Clima: <span>{cityPage?.weather[0].description}</span></p>
            <p>Viento: <span> {cityPage.wind.speed} km/h</span></p>
            <p>Cantidad de nubes: <span> {cityPage.clouds.all}%</span></p>
            <p>Latitud: <span> {cityPage.coord.lat}º</span></p>
            <p>Longitud: <span> {cityPage.coord.lon}º</span></p>
          </div>
        </div>
         <GoogleMaps lat={cityPage.coord.lat} lng={cityPage.coord.lon}/>
      </div>
    </main>
  )
}
export default City
