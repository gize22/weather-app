import React, { useEffect } from 'react';
import './Weather.css';
import searchIcon from '../assets/search-icon.jpg';


const Weather = () => {

   const search = async (city) => {
    try {
      const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f81291a41ee7debdf8dd0390425e6cc&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }

    }
  
          useEffect(() => {
            search("london");
              }, [])

  return (
    <div className='weather'>
      <div className="searchBar">
         <input type='text' placeholder='search'/> 
         <img className='img' src={searchIcon} alt='' />
      </div>
      <img className='weatherIcon' src='https://cdn-icons-png.flaticon.com/512/1163/1163661.png' alt='' />
      <p className='temperature'>20°C</p>
      <p className='location'>addis ababa</p>
    <div className="weather-data">
        <div className="col">
          <p>91%</p>
          <span>Humidity</span>
         </div>
        <div className="col">
           <p>10 km/h</p>
           <span>Wind Speed</span>
        </div>
      </div>
    </div>
  );
};    

export default Weather;