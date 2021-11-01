import React, {FC} from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
    weatherData: WeatherData
}





export const Weather: FC<WeatherProps> = ({ weatherData }) => {
  console.log(`weatherData`, weatherData)
    const fahrenheit = (weatherData.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (weatherData.main.temp - 273.15).toFixed(2);


    return(
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered" style={{marginBottom: 50}}>{weatherData.name} - {weatherData.sys.country}</h1>
            <div className="level" style={{alignItems: 'flex-start'}}>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">{weatherData.weather[0].description}</p>
                  <p className="title"><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt=""/></p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">temp</p>
                  <div className="title">
                    <p className="mb-2">{weatherData.main.temp}K</p>
                    <p className="mb-2">{fahrenheit}<sup>&#8457;</sup></p>
                    <p>{celsius}<sup>&#8451;</sup></p>
                  </div>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">humidity</p>
                  <p className="title">{weatherData.main.humidity}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">pressure</p>
                  <p className="title">{weatherData.main.pressure}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">wind</p>
                  <p className="title">{weatherData.wind.speed} m/s</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );


}