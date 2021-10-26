import moment from "moment-timezone";
import React from "react";
import Image from "next/image";

export default function WeeklyWeather({ weeklyWeather, timezone }) {
  return (
    <div className="weekly">
      {weeklyWeather.length > 0 &&
        weeklyWeather.map((weather, index) => {
          if (index == 0) {
            return;
          }

          return (
            <div className="weekly__card" key={weather.dt}>
              <div className="weekly__inner">
                <div className="weekly__left-content">
                  <div>
                    <h3>
                      {moment.unix(weather.dt).tz(timezone).format("dddd")}
                    </h3>

                    <h4>
                      <span>{weather.temp.max.toFixed(0)}&deg;C</span>
                      <span>{weather.temp.min.toFixed(0)}&deg;C</span>
                    </h4>
                  </div>

                  <div className="weekly__sun-times">
                    <div>
                      <span>
                        <Image
                          src={require(`../public/images/sunrise.svg`)}
                          alt={weather.weather[0].description}
         
                          width='40'
                          height='40'
                        />
                      </span>

                      <span>
                        {moment.unix(weather.sunrise).tz(timezone).format("LT")}
                      </span>
                    </div>

                    <div>
                      <span><Image
                          src={require(`../public/images/sunset.svg`)}
                          alt={weather.weather[0].description}
         
                          width='40'
                          height='40'
                        /></span>
                      <span>
                        {moment.unix(weather.sunset).tz(timezone).format("LT")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="weekly__right-content">
                  <div className="weekly__icon-wrapper">
                    <div>
                      <Image
                        src={require(`../public/images/${weather.weather[0].icon}.svg`)}
                        alt={weather.weather[0].description}
                        width='60'
                        height='60'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
