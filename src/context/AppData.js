import React, { createContext, useState } from 'react'

const DataContext = createContext();

const AppData = ({ children }) => {

    const [weatherInfo, setWeatherInfo] = useState();

    return (
        <DataContext.Provider value={{ weatherInfo, setWeatherInfo }}>
            {children}
        </DataContext.Provider>
    )
}

export default AppData
export { DataContext }
