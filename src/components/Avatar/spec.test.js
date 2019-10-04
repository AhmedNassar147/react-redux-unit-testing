import React from "react";
import { shallow } from "enzyme";
import Avatar from "./index";

const setup = (props = {}) => shallow(<Avatar {...props} />);

describe("Avatar component Tests", () => {
  describe("have src prop", () => {
    const props = {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEFNABOTfVvGRgGeLanXjK53Aeu_NBLBy_scZSgYXsoxHT1We",
      alt: "user-img"
    };
    const wrapper = setup(props);

    it("should render img component", () => {
      expect("src" in wrapper.props()).toEqual(true);
    });
  });

  describe("have no src", () => {
    const wrapper = setup();
    const img = wrapper.find("img");
    it("should not render", () => {
      expect(img.length).toBe(0);
    });
  });
});
