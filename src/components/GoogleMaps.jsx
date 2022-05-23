import { Wrapper } from '@googlemaps/react-wrapper'

import { useEffect, useRef, useState } from 'react'

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
}

const render = (status) => {
  return <h1>{status}</h1>
}
const apiKey = import.meta.env.VITE_API_KEY_G
const GoogleMapsComponent = ({ lat, lng }) => (
  <Wrapper apiKey={apiKey} render={render}>
    <MyMapComponent center={{ lat, lng }} zoom={defaultProps.zoom}/>
  </Wrapper>
)

function MyMapComponent ({ center, zoom }) {
  const ref = useRef(null)
  const [map, setMap] = useState()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center,
        zoom
      }))
    }
  }, [ref])

  return <div ref={ref} id="map" style={{ width: '100%', height: '700px', borderRadius: '1rem' }} />
}

export default GoogleMapsComponent
