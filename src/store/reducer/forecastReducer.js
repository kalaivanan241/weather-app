const initState = {
  forecast :[],
}

const forecastReducer = (state  = initState, action) => {

  switch(action.type)
  {
    case "FETCH_FORECAST" :{
      return {...state,forecast:action.forecasts}
    }
    case "RESET_FORECAST" :{
      return {...state,forecast:[]}
    }
    
  }

return {...state}

}

export default forecastReducer;