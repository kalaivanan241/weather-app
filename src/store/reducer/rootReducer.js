import { combineReducers } from 'redux';
import forecastReducer from "./forecastReducer";
import locationReducer from "./locationReducer"


const rootReducer = combineReducers({
  location: locationReducer,
  forecast: forecastReducer
})

export default rootReducer;