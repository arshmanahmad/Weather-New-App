import React from 'react'
import "./SearchBar.css";
import { useState } from "react"

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    const handleClick = () => {
        setSearchValue("");
    }
    return (
        <>
            <div className='search-bar-container flex-box '>
                <form action="" className="input-border flex-box">
                    <input className='search-bar' value={searchValue} onChange={handleChange} placeholder='Search Location...' type="text" />
                    <span onClick={handleClick} class="material-symbols-outlined">
                        search
                    </span>
                </form>
            </div>
        </>
    )
}


export default SearchBar