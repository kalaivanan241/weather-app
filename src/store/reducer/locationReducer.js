import { types } from "./../types";

const initState = {
  id: null,
  location: "",
  searchedLocations: [],
  error: ""
};

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_LOCATION: {
      return { ...state, ...action.location, error: "" };
    }
    case types.CHANGE_LOCATION: {
      return {
        ...state,
        searchedLocations: [],
        id: null,
        location: action.location,
        error: ""
      };
    }
    case types.FETCH_LOCATION: {
      return { ...state, id: null, searchedLocations: action.searchResult };
    }
    case types.FETCH_LOCATION_ERROR: {
      return { ...state, id: null, searchedLocations: [], error: action.error };
    }
    default: {
      return { ...state };
    }
  }
};

export default locationReducer;
