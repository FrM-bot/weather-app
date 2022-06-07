import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import CityProvider from './context/city.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CityProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CityProvider>
  </React.StrictMode>
)
