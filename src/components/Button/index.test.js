import React from "react";
import { shallow } from "enzyme";
import Button from "./index";

const setup = (props = {}) => shallow(<Button {...props} />);

describe("Button component Tests", () => {
  const props = {
    children: "title"
  };
  const component = setup(props);

  it("should have title props", () => {
    expect("children" in component.props()).toEqual(true);
  });
});
