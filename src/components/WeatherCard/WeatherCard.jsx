import React from 'react'
import "./WeatherCard.css";
const WeatherCard = ({ location, value, assumption }) => {
    return (
        <>
            <div className='card-box'>
                <div className="card-inner-box">
                    <p className='card-box-location'>
                        {location}
                    </p>
                    <div className="card-wrapper-box">
                        <h1 className='card-box-temperature'>
                            {value}
                        </h1>
                        <p className='card-box-assumption'>
                            {assumption}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard