import React, { useContext, useEffect } from 'react'
import "./App.css"
import WeatherDescription from './components/WeatherDescription/WeatherDescription'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherCard from './components/WeatherCard/WeatherCard'
import { DataContext } from './context/AppData'
import axios from 'axios'

const App = () => {

  const { weatherInfo, setWeatherInfo } = useContext(DataContext);


  const fetchWeatherInfo = async () => {
    await axios.get("https://weatherapi-com.p.rapidapi.com/forecast.json", {
      params: { q: "Khulna City" },
      headers: {
        'X-RapidAPI-Key': '2819954955msh9d66056844d80fbp168d10jsn2da9c582f5e8',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    }).then(response => {
      console.log(response);
      setWeatherInfo(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchWeatherInfo(); // eslint-disable-next-line
  }, [])


  return (
    <>
      {
        weatherInfo ? <>
          <div className="main-container">
            <div className="first-row-container">
              <div className="weather-info-container">
                <div className="weather-material-container">
                  {/* <span class="material-symbols-outlined">
                foggy
              </span> */}
                  {
                    weatherInfo && <img src={weatherInfo.current.condition.icon} alt="weather-icon" />
                  }
                  <p className="weather-condition-para">{weatherInfo && weatherInfo.current.condition.text}</p>
                  <p className="city-para">{`${weatherInfo.location.name} , ${weatherInfo.location.country}`}</p>
                  <h1 className="temperature-heading">{weatherInfo && `${weatherInfo.current.temp_c}°C`}</h1>
                </div>

              </div>
              <div className="search-bar-container">
                <SearchBar />
              </div>
              <div className="description-container">
                <div className="description-inner-container">
                  <WeatherDescription image="" property="Humidity" value={weatherInfo.current.humidity + "%"} />
                  <WeatherDescription image="" property="Air Pressure" value={`${weatherInfo.current.pressure_mb} PS`} />
                  <WeatherDescription image="" property="Clouds" value={`${weatherInfo.current.cloud}%`} />
                  <WeatherDescription image="" property="Wind Speed" value={`${weatherInfo.current.wind_kph} km/h`} />
                </div>
              </div>
            </div>
            <div className="second-row-container">
              <div className="card-container">
                <WeatherCard location="New York" />
                <WeatherCard location="Dubai" />
                <WeatherCard location="London" />
                <WeatherCard location="Berlin" />
                <WeatherCard location="Kutaisi" />
              </div>
            </div>
          </div>
        </> :
          <>
            <h1>Loading...</h1>
          </>
      }
    </>
  )
}

export default App