import * as React from "react";
import { shallow } from "enzyme";
import OurMission from "./our-mission";

describe("OurMission", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OurMission />);
    expect(wrapper).toMatchSnapshot();
  });
});
