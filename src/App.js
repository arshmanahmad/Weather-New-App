import React from 'react'
import "./App.css"
import WeatherDescription from './components/WeatherDescription/WeatherDescription'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherCard from './components/WeatherCard/WeatherCard'
import Data from './components/Data/Data'
const App = () => {
  return (
    <>
      <div className="main-container">
        <div className="first-row-container">
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
        <div className="second-row-container">
          <div className="card-container">
            <WeatherCard location="London" value="28°C" assumption="Feels like 30°C" />
            <WeatherCard location="Pakistan" value="12°C" assumption="Feels like 14°C" />
            <WeatherCard location="India" value="19°C" assumption="Feels like 21°C" />
            <WeatherCard location="Turkey" value="8°C" assumption="Feels like 12°C" />
            <WeatherCard location="Dubai" value="32°C" assumption="Feels like 35°C" />
            <WeatherCard location="Saudia" value="35°C" assumption="Feels like 40°C" />
          </div>
        </div>
        <Data />
      </div>
    </>
  )
}

export default App