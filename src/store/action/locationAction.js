import { fetchLocationsService } from "./../services/weatherApiServices";
import { types } from "./../types";

export const updateLocation = location => {
  return dispatch => {
    dispatch({ type: types.UPDATE_LOCATION, location });
  };
};

export const changeLocation = location => {
  return dispatch => dispatch({ type: types.CHANGE_LOCATION, location });
};

export const fetchLocation = location => {
  return dispatch => {
    fetchLocationsService(location)
      .then(res => {
        const searchResult = res.list ? res.list : [];
        if (searchResult.length === 0) {
          dispatch({
            type: types.FETCH_LOCATION_ERROR,
            error: "No Data Found...."
          });
        }
        dispatch({ type: types.FETCH_LOCATION, searchResult });
      })
      .catch(err => {
        dispatch({ type: types.FETCH_LOCATION_ERROR, error: err.message });
      });
  };
};
