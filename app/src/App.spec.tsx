import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";

import Todo from "./todo";
import Footer from "./footer";

describe("<App/>", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders the children correctly", () => {
    const Wrapper = shallow(<App />);

    expect(Wrapper.find(ApolloProvider)).toHaveLength(1);
    expect(Wrapper.find(Todo)).toHaveLength(1);
    expect(Wrapper.find(Footer)).toHaveLength(1);
  });
});
