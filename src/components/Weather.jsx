import React from 'react';
import './Weather.css';
import searchIcon from '../assets/search-icon.jpg';


const Weather = () => {
  return (
    <div className='weather'>
      <div className="searchBar">
         <input type='text' placeholder='search'/> 
         <img className='img' src={searchIcon} alt='' />
      </div>
      <img className='weatherIcon' src='https://cdn-icons-png.flaticon.com/512/1163/1163661.png' alt='' />
      <p className='temperature'>20°c</p>
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