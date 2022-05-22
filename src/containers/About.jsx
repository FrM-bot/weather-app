import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { Linkedin, Github, Portfolio } from '../components/Links'

const About = () => {
  const ReactLink = <a href="https://es.reactjs.org/" target='blank' className='link p-0'>React</a>
  const ReduxLink = <a href="https://es.redux.js.org/" target='blank' className='link p-0'>Redux</a>
  const RouterDOMLink = <a href="https://es.reactjs.org/" target='blank' className='link p-0'>React Router DOM</a>
  const OpenWeatherLink = <a href="https://openweathermap.org/" target='blank' className='link p-0'>OpenWeather</a>
  const SoyHenryLink = <a href="https://www.soyhenry.com/" className='link p-0' target='blank'>Soy Henry</a>

  return (
    <main>
    <Link to="/">
      <Button>
        Back
      </Button>
    </Link>
    <div className='my-4 text-center'>
      <h2>About me</h2>
      <p>
        Hola, soy <span className='link p-0'>Maciel Franco</span>, tengo 20 años y estoy estudiando desarrollador web fullstack en {SoyHenryLink}.
      </p>
      <p>
        Ésta es un app del tiempo muy simple hecha con {ReactLink}, {ReduxLink} y {RouterDOMLink} que se conecta a la API de {OpenWeatherLink}.
      </p>
      <p>
        Si quieres contactarme lo puedes hacer a travéz de mi <Linkedin />, también puedes ver éste u otros proyectos en mi <Github /> o visitar mi <Portfolio />.
      </p>
    </div>
  </main>
  )
}

export default About
