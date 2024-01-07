import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Data = () => {
    const [data, setData] = useState('');
    const fetchData = async (id) => {
        const response = await axios.get("https://weatherapi-com.p.rapidapi.com/current.json", {
            params: { q: '53.1,-0.13' },
            headers: {
                'X-RapidAPI-Key': '60a0e128b5msh2f22c7cefcda38dp13141bjsn65598cc1d4aa',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        });
        setData(response);
    }
    console.log(data);
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                {data && data.map((item) => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </div>
        </>
    )
}

export default Data