import React from 'react'

import Button from './Button'

import './Card.css'

import { Link } from 'react-router-dom'

import SvgCross from './icons/cross'

const Card = ({ id, tempMin, tempMax, name, img, onClose }) => {
  return (
    <div className='relative'>

        <Button styles='close-btn center' role='close-card' onClick={onClose}>
          <SvgCross />
        </Button>
        <Link to={`/city/${id}`}>
        <div className='card c-hover flex col align-x'>

        <h2 className='mt-5 p-2'>{name}</h2>
        <div className='flex align-x gap-2'>

          <div className='flex col'>
            <span>
              Min
            </span>

            <span>
              {tempMin}
            </span>
          </div>

          <div className='flex col'>
            <span>
              Max
            </span>

            <span>
              {tempMax}
            </span>
          </div>
          <div>
            <img className='img' src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={img} />
          </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
