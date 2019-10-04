import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { componentWithTestAttr } from "../../utils/index";

const setup = (props = {}) => shallow(<Header {...props} />);

describe("Header Component", () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it("should render without error", () => {
    const wrapper = componentWithTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render with logo", () => {
    const wrapper = componentWithTestAttr(component, "logo");
    expect(wrapper.length).toBe(1);
  });

  it("should render with alt attribute", () => {
    const wrapper = componentWithTestAttr(component, "logo");
    expect("alt" in wrapper.props()).toEqual(true);
  });

  it("should render with src attribute", () => {
    const wrapper = componentWithTestAttr(component, "logo");
    expect("src" in wrapper.props()).toEqual(true);
  });

  it("should render with header title", () => {
    const wrapper = componentWithTestAttr(component, "title");
    expect(wrapper.length).toBe(1);
  });
});
