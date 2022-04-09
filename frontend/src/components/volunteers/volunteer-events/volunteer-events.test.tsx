import * as React from "react";
import { shallow } from "enzyme";
import VolunteerEvents from "./volunteer-events";

describe("VolunteerEvents", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<VolunteerEvents />);
    expect(wrapper).toMatchSnapshot();
  });
});
