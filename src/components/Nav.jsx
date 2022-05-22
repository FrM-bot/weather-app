
import SearchBar from './SearchBar.jsx'
import { Link } from 'react-router-dom'
import AboutButton from './AboutButton.jsx'

const Nav = ({ setCities, cities }) => {
  return (
        <header className='card flex space-between align-x sm-center gap-4'>
                <h1 className='app-title'>
            <Link to="/">
                Weather App
            </Link>
                </h1>
            <div className='flex gap-2 align-x md-space-between'>
                <SearchBar
                    onSearch={(newCity) => setCities([...cities, newCity])}
                    cities={cities}
                    />
                <div className='md-none'>
                    <AboutButton />
                </div>
            </div>
        </header>
  )
}

export default Nav
