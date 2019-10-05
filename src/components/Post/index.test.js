import React from "react";
import { shallow } from "enzyme";
import PostItem from "./index";
import { componentWithTestAttr } from "./../../utils";

const setup = (props = {}) => shallow(<PostItem {...props} />);

describe("Post Item Tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it("should has a title", () => {
    const comp = componentWithTestAttr(wrapper, "title");
    expect(comp.length).toEqual(1);
  });

  it("should has a post body", () => {
    const comp = componentWithTestAttr(wrapper, "postBody");
    expect(comp.length).toEqual(1);
  });
});
