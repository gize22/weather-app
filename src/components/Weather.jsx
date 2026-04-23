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

    </div>
  );
};    

export default Weather;