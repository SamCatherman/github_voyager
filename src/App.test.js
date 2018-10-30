import React from "react";
import App from "./App";
import { shallow, instance } from "enzyme";

describe("App", () => {
  it("App Component renders without crashing", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find(".App").length).toEqual(1);
  });

  it("renders with a className of App", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.props().className).toBe("App");
  });

  it("renders the search container", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find("SearchContainer").length).toEqual(1);
  });
});
