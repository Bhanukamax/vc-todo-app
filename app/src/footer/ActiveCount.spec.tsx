import React from "react";
import { shallow } from "enzyme";
import { ActiveCount } from "./ActiveCount";

describe("<ActiveCount/>", () => {
  it("renders correctly", () => {
    const component = shallow(<ActiveCount />);

    expect(component).toMatchSnapshot();
  });

  it("reders correctly with props", () => {
    const component = shallow(<ActiveCount count={5} />);

    expect(component).toMatchSnapshot();
  });
});
