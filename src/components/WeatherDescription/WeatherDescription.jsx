import React from 'react'
import "./WeatherDescription.css";
const WeatherDescription = ({ image, property, value }) => {
    return (
        <>
            <div className="description-material-container">
                <div className="image-container">
                    <span class="material-symbols-outlined">
                        foggy
                    </span>
                </div>
                <div className="description-data-container">
                    <p className="property-para">{property}</p>
                    <p className="value-para">
                        {value}
                    </p>
                </div>
            </div>
        </>
    )
}

export default WeatherDescription