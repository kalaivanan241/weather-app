const initState = {
  id:null,
  location: "",
  searchedLocations:[],
  error:""
}

const locationReducer = (state  = initState, action) => {
switch(action.type)
{
  case "UPDATE_LOCATION":
  {
    return {...state,...action.location,error:""}
  }
  case "CHANGE_LOCATION":
  {
    return {...state,searchedLocations:[],id:null, location:action.location,error:""}
  }
  case "FETCH_LOCATION":
  {
    return {...state,id:null, searchedLocations:action.searchResult}
  }
  case "FETCH_LOCATION_ERROR" :{
       return {...state,id:null, searchedLocations:[],error: action.error}
  }
  default:
  {
    return {...state}
  }
}
}

export default locationReducer;