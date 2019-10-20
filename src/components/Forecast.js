import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

export default function Forecast(props) {
  const { forecast } = props;
  const {
    time,
    temp_min,
    temp_max,
    condition,
    icon,
    windSpeed,
    date
  } = forecast;
  return (
    <li className="collection-item" data-test="forecast-detail">
      <div className="row">
        <div
          className="forecast-detail forecast-time"
          data-test="forecast-detail-time"
        >
          {moment(`${date} ${time}`).format("LT")}
        </div>
        <div
          className="forecast-detail forecast-condition"
          data-test="forecast-detail-icon"
        >
          <img
            alt="10n"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            height="40"
            width="40"
          />
          {condition}
        </div>
        <div
          className="forecast-detail forecast-temp"
          data-test="forecast-detail-temp"
        >
          {temp_min} - {temp_max}
        </div>
        <div
          className="forecast-detail forecast-wind"
          data-test="forecast-detail-wind"
        >
          {windSpeed}
        </div>
      </div>
    </li>
  );
}

Forecast.propTypes = {
  forecast: PropTypes.shape({
    time: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired
  }).isRequired
};
