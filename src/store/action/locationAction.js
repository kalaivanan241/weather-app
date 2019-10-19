import {fetchLocationsService} from "./../services/weatherApiServices";

export const updateLocation = (location) =>
{
    return (dispatch) => {
     
        dispatch({type:"UPDATE_LOCATION", location })
    }
}

export const changeLocation = (location) =>
{
   return (dispatch) =>
        dispatch({type:"CHANGE_LOCATION", location })
}

export const fetchLocation = (location) =>
 {
 return (dispatch) => {
        fetchLocationsService(location).then(res=> {
          const searchResult = res.list ? res.list : [];
          if(searchResult.length === 0)
          {
            dispatch({type:"FETCH_LOCATION_ERROR", error:"No Data Found...." })
          }
          dispatch({type:"FETCH_LOCATION", searchResult })
        }).catch(err =>{
           dispatch({type:"FETCH_LOCATION_ERROR", error:err.message })
        })
 }
 }
