import './App.css'
import Cards from '../components/Cards.jsx'

const Home = ({ setCities, cities, setCity }) => {
  console.log(cities)
  return (
        <main className='center my-2'>
            <Cards
                cities={cities}
                setCities={setCities}
                setCity={setCity}
            />
        </main>
  )
}

export default Home
