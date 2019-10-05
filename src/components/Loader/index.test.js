import React from "react";
import { shallow } from "enzyme";
import Loader from "./index";
import { componentWithTestAttr } from "../../utils";

const setup = (props = {}) => shallow(<Loader {...props} />);

describe("Loader Component Tests", () => {
  it("should render spinner", () => {
    const wrapper = setup({ loading: true, noData: false, children: null });
    const comp = componentWithTestAttr(wrapper, "spinner");
    expect(comp.length).toEqual(1);
  });

  it("should render nodata text", () => {
    const wrapper = setup({ loading: false, noData: true, children: null });
    const comp = componentWithTestAttr(wrapper, "nodata");
    expect(comp.length).toEqual(1);
  });

  it("should render children component", () => {
    const wrapper = setup({
      loading: false,
      noData: false,
      children: []
    });

    const comp = componentWithTestAttr(wrapper, "loaderChildren");
    expect(comp.length).toEqual(1);
  });
});
