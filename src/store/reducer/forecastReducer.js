import { types } from "./../types";
const initState = {
  forecast: []
};

const forecastReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_FORECAST: {
      return { ...state, forecast: action.forecasts };
    }
    case types.RESET_FORECAST: {
      return { ...state, forecast: [] };
    }
    default:
      return { ...state };
  }
};

export default forecastReducer;
