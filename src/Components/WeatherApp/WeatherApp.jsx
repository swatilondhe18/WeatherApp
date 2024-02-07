import React, { useState } from "react";
import './WeatherApp.css';

import search_icon from "../Asset/search.png";
import clear_icon from "../Asset/clear.png";
import cloud_icon from "../Asset/cloud.png";
import drizzle_icon from "../Asset/drizzel.png";
import rain_icon from "../Asset/rain.png";
import snow_icon from "../Asset/snow.png";
import wind_icon from "../Asset/windy.png";
import humidity_icon from "../Asset/humidity.png";


const WeatherApp = () => {
    let api_key = "fcca3734856ab05ce3175a605f9181ed";

    const [wicon, setwicon]=useState(cloud_icon);

    const search = async() => {
       const element=document.getElementsByClassName("cityInput");

       if(element[0].value==="")
       {
        return 0;
       }
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        
       let response = await fetch(url);
       let data = await response.json();
       const humidity =document.getElementsByClassName("humidity-percentage");
       const Wind =document.getElementsByClassName("wind-rate");
       const temperature =document.getElementsByClassName("weather-temp");
       const location =document.getElementsByClassName("weather-location");

       humidity[0].innerHTML = data.main.humidity+ " %";
       Wind[0].innerHTML = data.wind.speed+" km/h";
       temperature[0].innerHTML = data.main.temp+" ℃";
       location[0].innerHTML = data.name;

       
    }

    return (

        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search" />
                <div className="searchIcon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="Icon" />
                </div>
            </div>
                <div className="weather-image">
                    <img src={cloud_icon} alt="cloud" />
                </div>
                 <div className="weather-temp">24℃</div>
                 <div className="weather-location">London</div>
                 <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WeatherApp;