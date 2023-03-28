import React, { useState, useEffect } from 'react';
import Input from '@mui/material/Input';
import './WeatherWidget.css';
const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(''); 

  // Fetch weather data from OpenWeatherMap API
  useEffect(() => {
    const API_KEY = '16352849682e4607547d9b77770ff2d4';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location || "London"},uk&APPID=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [location]);

    const handleLocationChange = (event) => {
        event.preventDefault();
       
    setLocation(event.target.elements[0].value);
  };

  // Render loading spinner while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render weather data
  return (<>  <form onSubmit={handleLocationChange} className="form-weather">
        
        <Input
          type="text"
          placeholder="UK cities only"
          autoComplete="off"
          autoFocus
        />

        <button type="submit" className="button-weather">
          <span className='search-button-text'>Search</span>
        </button>
      </form>
    <div className="weather-widget">
      <h2>{weatherData.name}</h2>
      <div className="weather-conditions">
        <div className="weather-icon">
          {weatherData.weather && (
            <img
              src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            />
          )}
        </div>
        <div className="weather-details">
          {weatherData.main && (
            <>
              <div className="temperature">
                {weatherData.main.temp.toFixed(0)}°C
              </div>
              <div className="feels-like">
                Feels like {weatherData.main.feels_like.toFixed(0)}°C
              </div>
              <div className="humidity">
                Humidity: {weatherData.main.humidity}%
              </div>
              <div className="wind">
                Wind: {weatherData.wind.speed.toFixed(1)} m/s
              </div>
            </>
          )}
        </div>
      </div>
    
      </div>
      
      </>
  );
};

export default WeatherWidget;