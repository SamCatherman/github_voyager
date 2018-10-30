import React from "react";
import SearchForm from "./SearchForm";
import { shallow } from "enzyme";

describe("Search Form", () => {
  let wrapper = shallow(<SearchForm />);
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
