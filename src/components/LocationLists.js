import React from "react";
import { connect } from "react-redux";
import { updateLocation } from "./../store/action/locationAction";
import { fetchForecast } from "./../store/action/forecastAction";

function LocationLists(props) {
  const { locations, id } = props;
  const updateLocation = location => {
    props.updateLocation({
      id: location.id,
      location: `${location.name},${location.sys.country}`,
      country: location.country
    });
    props.fetchForecast(location.id);
  };
  if (locations.length === 0 || id) return <React.Fragment />;
  return (
    <ul className="list-group list-group-horizontal overflow-auto">
      {locations.map(location => (
        <li
          className="list-group-item forecast-list-item"
          onClick={() => updateLocation(location)}
        >
          <div>
            <b>
              {`${location.name},${location.sys.country}`}
              <img
                src={`https://openweathermap.org/images/flags/${location.sys.country.toLowerCase()}.png`}
                alt={location.sys.country}
              />
            </b>
          </div>
          <div>{`[${location.coord.lat}] - [${location.coord.lon}]`}</div>
          <div>
            {location.weather[0].description} - {location.main.temp}&#x2103;
          </div>
          <div>
            <img
              alt="10n"
              src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
              height="50"
              width="50"
            />
          </div>
          <div>
            {location.main.temp_min} to {location.main.temp_min}&#x2103;
          </div>
          <div>wind: {location.wind.speed}m/s</div>

          <div>
            <button
              onClick={() => updateLocation(location)}
              className="btn btn-primary btn-sm"
            >
              Get Forecast
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    updateLocation: location => dispatch(updateLocation(location)),
    fetchForecast: locationId => dispatch(fetchForecast(locationId))
  };
};

const mapStateToProps = state => {
  return {
    locations: state.location.searchedLocations,
    id: state.location.id
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationLists);
