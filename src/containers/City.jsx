import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import GoogleMaps from '../components/GoogleMaps'
// import GoogleMaps from '../components/GoogleMaps'
import { GET_CITY } from '../services/GET_CITY'
import './City.css'

const City = ({ city }) => {
  // const navigate = useNavigate()
  const { id } = useParams()
  const [cityPage, setCityPage] = useState()
  console.log({ id })
  useEffect(() => {
    if (!city) {
      GET_CITY({ id }).then((res) => {
        console.log(res)
        setCityPage(res)
      }).catch(alert)
    }
    city && setCityPage(city)
  }, [city])
  console.log({ cityPage }, { city })

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
        {/* <GoogleMaps />
         */}
         {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14244.499454767974!2d-60.82604920000001!3d-26.804152549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1653077526376!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
         <GoogleMaps lat={cityPage.coord.lat} lng={cityPage.coord.lon}/>
      </div>
    </main>
  )
}
export default City
