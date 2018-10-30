import React from "react";
import Result from "./Result";
import { shallow } from "enzyme";

describe("<Result />", () => {
  it("renders correctly", () => {
    let wrapper = shallow(<Result />);
    expect(wrapper).toMatchSnapshot();
  });
});
