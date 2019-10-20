import React from "react";
import { shallow } from "enzyme";
import Forecast from "./Forecast";
import { findByTestAttr, checkProps } from "../utils/testUtils";

const setUp = (props = {}) => {
  const component = shallow(<Forecast {...props}></Forecast>);
  return component;
};

describe("Forecast Component", () => {
  describe("Should Forecast Component Renders", () => {
    let component;
    const forecast = {};
    beforeEach(() => {
      component = setUp({ forecast });
    });

    it("Should render forecast-detail", () => {
      const wrapper = findByTestAttr(component, "forecast-detail");
      expect(wrapper.length).toBe(1);
    });
    it("Should render forecast-detail-icon", () => {
      const wrapper = findByTestAttr(component, "forecast-detail-icon");
      expect(wrapper.length).toBe(1);
    });
    it("Should render forecast-detail-time", () => {
      const wrapper = findByTestAttr(component, "forecast-detail-time");
      expect(wrapper.length).toBe(1);
    });
    it("Should render forecast-detail-temp", () => {
      const wrapper = findByTestAttr(component, "forecast-detail-temp");
      expect(wrapper.length).toBe(1);
    });
    it("Should render forecast-detail-wind", () => {
      const wrapper = findByTestAttr(component, "forecast-detail-wind");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Forecast Check Props", () => {
    it("Passed empty Object", () => {
      const error = checkProps(Forecast, { Forecast: {} });
      expect(error).toBeDefined();
    });
    it("Passed empty Object", () => {
      const error = checkProps(Forecast, {});
      expect(error).toBeDefined();
    });
    it("Check With Valid Props", () => {
      const forecast = {
        time: "12-12-2019 13:00:00",
        humidity: 1,
        condition: "",
        icon: "",
        date: "",
        temp_max: 0,
        temp_min: 0,
        windSpeed: 0
      };
      const error = checkProps(Forecast, { forecast });
      expect(error).toBeUndefined();
    });
    describe("Check With No Valid Props", () => {
      it("Check Without Time Props", () => {
        const forecast = {
          humidity: 1,
          condition: "",
          icon: "",
          date: "",
          temp_max: 0,
          temp_min: 0,
          windSpeed: 0
        };
        const error = checkProps(Forecast, { forecast });
        expect(error).toBeDefined();
      });
      it("Check Without Humidity Props", () => {
        const forecast = {
          time: "12-12-2019 13:00:00",
          condition: "",
          icon: "",
          date: "",
          temp_max: 0,
          temp_min: 0,
          windSpeed: 0
        };
        const error = checkProps(Forecast, { forecast });
        expect(error).toBeDefined();
      });
      it("Check Without Condition Props", () => {
        const forecast = {
          time: "12-12-2019 13:00:00",
          humidity: 1,
          icon: "",
          date: "",
          temp_max: 0,
          temp_min: 0,
          windSpeed: 0
        };
        const error = checkProps(Forecast, { forecast });
        expect(error).toBeDefined();
      });
      it("Check Without icon Props", () => {
        const forecast = {
          time: "12-12-2019 13:00:00",
          humidity: 1,
          condition: "",
          date: "",
          temp_max: 0,
          temp_min: 0,
          windSpeed: 0
        };
        const error = checkProps(Forecast, { forecast });
        expect(error).toBeDefined();
      });
      it("Check Without Date Props", () => {
        const forecast = {
          time: "12-12-2019 13:00:00",
          humidity: 1,
          condition: "",
          icon: "",
          temp_max: 0,
          temp_min: 0,
          windSpeed: 0
        };
        const error = checkProps(Forecast, { forecast });
        expect(error).toBeDefined();
      });
      it("Check Without temp_max Props", () => {
        const forecast = {
          time: "12-12-2019 13:00:00",
          humidity: 1,
          condition: "",
          icon: "",
          date: "",
          temp_min: 0,
          windSpeed: 0
        };
        const error = checkProps(Forecast, { forecast });
        expect(error).toBeDefined();
      });
    });
  });
});
