import React, { useContext } from 'react'
import { GET_CITY } from '../services/GET_CITY.js'
import Button from './Button'
import './SearchBar.css'
import { CityContext } from '../context/city.context'

const SearchBar = () => {
  const { cities, setCities } = useContext(CityContext)
  const handlerSubmit = (e) => {
    e.preventDefault()

    const name = e.target.elements.city.value

    if (!name) return alert('Ingresa una ciudad')
    GET_CITY({ name })
      .then((response) => {
        if (response?.error) return alert(response.error)

        const indexCity = cities?.findIndex(city => city.id === response.id)

        if (indexCity > -1) return alert('Esta ciudad ya fue agragada...')

        setCities([...cities, response])

        e.target.elements.city.value = ''
      }).catch(alert)
  }

  return (
    <form onSubmit={handlerSubmit}>
      <div className='flex gap-2 align-x'>
        <input name='city' type="text" placeholder="Ingresa una ciudad..." className='input' />
        <Button type='submit' >Add</Button>
      </div>
    </form>
  )
}

export default SearchBar
