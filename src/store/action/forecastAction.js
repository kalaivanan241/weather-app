import {fetchForecastService} from "./../services/weatherApiServices";
import {buildCustomArray} from "./../../utils/weatherDetailMapping";

export const fetchForecast = (id) =>
{
    return (dispatch) => {
        fetchForecastService(id).then(res=> {
          dispatch({type:"FETCH_FORECAST", forecasts:buildCustomArray(res)})
        }).catch(err =>{
           dispatch({type:"FETCH_FORECAST_ERROR", err })
        })
    }
}

export const resetForecast = (id) =>
{
    return (dispatch) => {
       dispatch({type:"RESET_FORECAST" })
    }
}
