import React from "react";
import moment from "moment-timezone";
import Image from "next/image";

export default function TodaysWeather({ city, weather, timezone }) {
  return (
    <div className="today">
      <div className="today__inner">
        <div className="today__left-content">
          <h1>
            {city.name} ({city.country})
          </h1>
          <h2>
            <span>{Math.round(weather.temp.max)}&deg;C</span>
            <span>{Math.round(weather.temp.min)}&deg;C</span>
          </h2>
          <div className="today__sun-times">
            <div>
              <span>Sunrise</span>
              <span>
                {moment.unix(weather.sunrise).tz(timezone).format("LT")}
              </span>
            </div>
            <div>
              <span>Sunset</span>
              <span>
                {moment.unix(weather.sunset).tz(timezone).format("LT")}
              </span>
            </div>
          </div>
        </div>

        <div className="today__right-content">
          <div className="today__icon-wrapper">
            <div>
              <Image
                src={require(`../public/images/${weather.weather[0].icon}.svg`)}
                alt={weather.weather[0].description}
                layout="fill"
              />
            </div>
          </div>
          <h3>{weather.weather[0].description}</h3>
        </div>
      </div>
    </div>
  );
}
