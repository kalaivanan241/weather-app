import { fetchForecastService } from "./../services/weatherApiServices";
import { buildCustomArray } from "./../../utils/weatherDetailMapping";
import { types } from "./../types";

export const fetchForecast = id => {
  return dispatch => {
    fetchForecastService(id)
      .then(res => {
        dispatch({
          type: types.FETCH_FORECAST,
          forecasts: buildCustomArray(res)
        });
      })
      .catch(err => {
        dispatch({ type: types.FETCH_FORECAST_ERROR, err });
      });
  };
};

export const resetForecast = id => {
  return dispatch => {
    dispatch({ type: types.RESET_FORECAST });
  };
};
