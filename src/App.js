import React from 'react'
import "./App.css"
import WeatherDescription from './components/WeatherDescription/WeatherDescription'
import SearchBar from './components/SearchBar/SearchBar'
const App = () => {
  return (
    <>
      <div className="main-container">
        <div className="weather-info-container">
          <div className="weather-material-container">
            <span class="material-symbols-outlined">
              foggy
            </span>
            <p className="weather-condition-para">Fog</p>
            <p className="city-para">Khulna City</p>
            <h1 className="temperature-heading">28°C</h1>
          </div>

        </div>
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <div className="description-container">
          <div className="description-inner-container">
            <WeatherDescription image="" property="Humidity" value="50 %" />
            <WeatherDescription image="" property="Air Pressure" value="1009.483 PS" />
            <WeatherDescription image="" property="Chance of Rain" value="0%" />
            <WeatherDescription image="" property="Wind Speed" value="1.4 km/h" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App