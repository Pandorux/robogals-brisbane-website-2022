import * as React from "react";
import { shallow } from "enzyme";
import AboutUs from "./about-us";

describe("AboutUs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper).toMatchSnapshot();
  });
});
