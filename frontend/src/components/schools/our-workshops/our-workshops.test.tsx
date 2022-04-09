import * as React from "react";
import { shallow } from "enzyme";
import OurWorkshops from "./our-workshops";

describe("OurWorkshops", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OurWorkshops />);
    expect(wrapper).toMatchSnapshot();
  });
});
