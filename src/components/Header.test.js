import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAttr } from "../utils/testUtils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props}></Header>);
  return component;
};

describe("Header Component", () => {
  it("Should Render Header", () => {
    const component = setUp();
    const wrapper = findByTestAttr(component, "header-component");
    expect(wrapper.length).toBe(1);
  });
});
