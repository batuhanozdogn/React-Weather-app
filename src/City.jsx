import React from 'react';

const City = ({ city }) => {
    if (!city) return null; // Eğer city verisi yoksa hiçbir şey render etme

    console.log(city);

    return (
        <div>
            <div>
                <h1>Temperature: {city.main.temp}°C</h1>
                <h1>City: {city.name}</h1>
                <h1>Weather: {city.weather[0].main}</h1>
            </div>
        </div>
    );
};

export default City;
