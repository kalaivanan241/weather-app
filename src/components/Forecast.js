import React from "react";
import moment from "moment";

export default function Forecast(props) {
  const { forecast } = props;
  const {
    time,
    temp,
    temp_min,
    temp_max,
    condition,
    icon,
    windSpeed,
    date
  } = forecast;
  return (
    <li className="collection-item">
      <div className="row">
        <div className="forecast-detail forecast-time">
          {moment(`${date} ${time}`).format("LT")}
        </div>
        <div className="forecast-detail forecast-condition ">
          <img
            alt="10n"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            height="40"
            width="40"
          />
          {condition}
        </div>
        <div className="forecast-detail forecast-temp">
          {temp_min} - {temp_max}
        </div>
        <div className="forecast-detail forecast-wind">{windSpeed}</div>
      </div>
    </li>
  );
}
