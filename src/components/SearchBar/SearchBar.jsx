import React, { useContext } from 'react'
import "./SearchBar.css";
import { useState } from "react"
import { DataContext } from '../../context/AppData';
import axios from 'axios';

const SearchBar = () => {
    const { setWeatherInfo } = useContext(DataContext)
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        fetchWeatherInfo(searchValue);
    }

    const fetchWeatherInfo = async (inputVal) => {
        await axios.get("https://weatherapi-com.p.rapidapi.com/forecast.json", {
            params: { q: inputVal },
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


    return (
        <>
            <div className='search-bar-container flex-box '>
                <form onSubmit={handleSubmit} className="input-border flex-box">
                    <input className='search-bar' value={searchValue} onChange={handleChange} placeholder='Search Location...' type="text" />
                    <button className='searchBtn'>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </form>
            </div>
        </>
    )
}


export default SearchBar