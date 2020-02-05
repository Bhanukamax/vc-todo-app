import React from "react";
import { Button } from "./Button";
import { shallow } from "enzyme";

describe("<Button/>", () => {
  it("renders correctly wihtout children", () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });

  it("renders the button correctly with children", () => {
    const component = shallow(
      <Button>
        <p>test</p>
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
