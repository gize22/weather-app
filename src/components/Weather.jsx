import React, { useState,useEffect,useRef } from 'react';
import './Weather.css';
import searchIcon from '../assets/search-icon.jpg';


const Weather = () => {

   const [weather, setWeather] = useState(null);
   const inputRef = useRef();

   const search = async (city) => {
      if(city===""){
         alert("Please enter a city name");
         return;
      } 
      
    try {
      // Fetch weather data from OpenWeatherMap API
      const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f81291a41ee7debdf8dd0390425e6cc&units=metric`;
      
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeather({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      });

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }

    }
      // Fetch weather data for a default city (e.g., London) when the component mounts
          useEffect(() => {
            search("paris");
              }, [])

               
         if (!weather) {
            return (
               <div className='weather'>
                   <p>Loading weather data...</p>
                </div>
                  );
                } 

  return (
    <div className='weather'>
      <div className="searchBar">
         <input  ref={inputRef} type='text' placeholder='search'/> 
         <img className='img' src={searchIcon} alt='' onClick={()=>search(inputRef.current.value)}/>
      </div>
      <img className='weatherIcon' src={weather.icon} alt='' />
      <p className='temperature'>{weather.temperature}°C</p>
      <p className='location'>{weather.location}</p>
    <div className="weather-data">
        <div className="col">
          <p>{weather.humidity}%</p>
          <span>Humidity</span>
         </div>
        <div className="col">
           <p>{weather.windSpeed} km/h</p>
           <span>Wind Speed</span>
        </div>
      </div>
    </div>
  );
};    

export default Weather;