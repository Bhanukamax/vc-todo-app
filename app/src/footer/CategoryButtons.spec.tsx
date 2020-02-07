import React from "react";
import "jest-styled-components";
import { CategoryButtons, NavLink, StyledLink } from "./CategoryButtons";
import { shallow } from "enzyme";

describe("<CategoryButtons/>", () => {
  it("renders correctly", () => {
    const component = shallow(<CategoryButtons />);

    expect(component).toMatchSnapshot();
  });

  it("renders the children propertly", () => {
    const Wrapper = shallow(<CategoryButtons />);

    expect(Wrapper.find(StyledLink)).toHaveLength(3);
  });
});
