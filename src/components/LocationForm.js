import React, { Component } from "react";
import { connect } from "react-redux";
import {
  changeLocation,
  fetchLocation
} from "./../store/action/locationAction";
import { resetForecast } from "./../store/action/forecastAction";

class LocationForm extends Component {
  onChangePlace = e => {
    this.props.changeLocation(e.target.value);
    this.props.resetForecast();
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchLocation(this.props.place.location);
  };
  render() {
    const place = this.props.place.location;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="row location-form">
            <div className="form-group">
              <label htmlFor="location" className="location-label">
                Location
              </label>
              <input
                type="text"
                id="location"
                onChange={this.onChangePlace}
                className="form-control"
                value={place}
              />
            </div>
            <div className="input-field">
              <input
                className="btn btn-primary waves-effect"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        {this.props.place.error.length > 0 && (
          <div>{this.props.place.error}</div>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location)),
    fetchLocation: location => dispatch(fetchLocation(location)),
    resetForecast: () => dispatch(resetForecast())
  };
};

const mapStateToProps = state => {
  return {
    place: state.location
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationForm);
