import locationReducer from "./locationReducer";
import { types } from "./../types";

describe("Location Reducer", () => {
  it("Should Return default state", () => {
    const initState = {
      id: null,
      location: "",
      searchedLocations: [],
      error: ""
    };
    const newState = locationReducer(undefined, {});
    expect(newState).toMatchObject(newState);
  });
  it("Should Return Fetched Location", () => {
    const state = {
      id: null,
      location: "",
      searchedLocations: [{}, {}],
      error: ""
    };
    const newState = locationReducer(undefined, {
      type: types.FETCH_LOCATION,
      searchResult: state.searchedLocations
    });
    expect(newState).toMatchObject(state);
  });
  it("Should Return updated location", () => {
    const state = {
      id: 1,
      location: "name",
      searchedLocations: [],
      error: ""
    };

    const newState = locationReducer(undefined, {
      type: types.UPDATE_LOCATION,
      location: { id: state.id, location: state.location }
    });
    expect(newState).toMatchObject(state);
  });
  it("Should Return updated error", () => {
    const newState = locationReducer(undefined, {
      type: types.FETCH_LOCATION_ERROR,
      error: "error"
    });
    expect(newState.error).toEqual("error");
  });
});
