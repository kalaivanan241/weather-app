import forecastReducer from "./forecastReducer";
import { types } from "./../types";

describe("Forecast Reducer", () => {
  it("Should Return default state", () => {
    const newState = forecastReducer(undefined, {});
    expect(newState.forecast).toEqual([]);
  });
  it("Should Return Forecast", () => {
    const forecasts = [{ temp: 0 }, { temp: 0 }];
    const newState = forecastReducer(undefined, {
      type: types.FETCH_FORECAST,
      forecasts
    });
    expect(newState.forecast).toEqual(forecasts);
  });
  it("Should Return default state", () => {
    const newState = forecastReducer(undefined, {
      type: types.RESET_FORECAST
    });
    expect(newState.forecast).toEqual([]);
  });
});
