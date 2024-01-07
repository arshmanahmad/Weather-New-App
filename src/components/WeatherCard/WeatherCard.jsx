import React, { useEffect, useState } from 'react'
import "./WeatherCard.css";
import axios from 'axios';
const WeatherCard = ({ location }) => {

    const [weather, setSearchValue] = useState();

    const fetchWeatherInfo = async () => {
        await axios.get("https://weatherapi-com.p.rapidapi.com/forecast.json", {
            params: { q: location },
            headers: {
                'X-RapidAPI-Key': '2819954955msh9d66056844d80fbp168d10jsn2da9c582f5e8',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        }).then(response => {
            console.log(response);
            setSearchValue(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        fetchWeatherInfo(); // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className='card-box'>
                <div className="card-inner-box">
                    <p className='card-box-location'>
                        {weather && weather.location.name}
                    </p>
                    <div className="card-wrapper-box">
                        <h1 className='card-box-temperature'>
                            {weather && weather.current.temp_c}°C
                        </h1>
                        <p className='card-box-assumption'>
                            Feels Like   {weather && weather.current.feelslike_c}°C
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard