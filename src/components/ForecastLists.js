import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Forecast from "./Forecast";

class ForecastLists extends Component {
  state = {
    showFlag: null
  };

  toggleForecasts = day => {
    this.setState({
      showFlag: day === this.state.showFlag ? null : day
    });
  };

  render3daysDetails = () => {
    const { showFlag } = this.state;
    const { forecasts } = this.props;
    console.log(this.state.showFlag, forecasts);
    const forecast = showFlag
      ? forecasts.find(forecast => forecast.day === showFlag)
      : forecasts[0];
    if (forecast) {
      return (
        <ul className="collection with-header">
          <li className="collection-item forecast-header">
            <div className="row">
              <div className="forecast-detail forecast-time">Time</div>
              <div className="forecast-detail forecast-condition ">
                Condition
              </div>
              <div className="forecast-detail forecast-temp">
                Temp range(&#x2103;)
              </div>
              <div className="forecast-detail forecast-wind">Wind (m/s)</div>
            </div>
          </li>
          {forecast.forecast3hours.map(forecast3hour => (
            <Forecast forecast={forecast3hour} />
          ))}
        </ul>
      );
    } else {
      return <div></div>;
    }
  };

  renderForecast = () => {
    let { showFlag } = this.state;
    const { forecasts } = this.props;
    const forecast = showFlag
      ? forecasts.find(forecast => forecast.day === showFlag)
      : forecasts[0];
    const { day } = forecast;
    showFlag = day;
    return (
      <ul className="list-group overflow-auto forecast-list-group ">
        {forecasts.map(forecast => (
          <li
            key={forecast.day}
            onClick={() => this.toggleForecasts(forecast.day)}
            className={`list-group-item forecast-list-item ${
              forecast.day === showFlag ? "highlight-active" : ""
            }`}
          >
            <div>
              <button className="btn btn-primary">
                <b>
                  {forecast.dayName} - {forecast.condition}
                </b>
              </button>
            </div>
            <div>
              <img
                alt="10n"
                src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
                height="50"
                width="50"
              />
            </div>
            <div>
              {forecast.temp_min}&#x2103; to {forecast.temp_max} &#x2103;
            </div>
            <div>wind: {forecast.wind} m/s</div>
            <div>humidity:{forecast.humidity}g/m3</div>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { forecasts } = this.props;

    const { id, location } = this.props.location;
    return (
      <div>
        {forecasts.length > 0 && (
          <div className="forecasts">
            <div className="card-panel">
              Weather Forecast for{" "}
              <b>
                {location}{" "}
                <img
                  src={`https://openweathermap.org/images/flags/${location
                    .toLowerCase()
                    .substr(location.length - 2)}.png`}
                  alt={location.toLowerCase()}
                />
              </b>
            </div>
            <div className="forecast-details">
              <div className="forecast">{this.renderForecast()}</div>
              <div className="hour-forecast">{this.render3daysDetails()}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
    forecasts: state.forecast.forecast
  };
};

export default connect(mapStateToProps)(ForecastLists);
