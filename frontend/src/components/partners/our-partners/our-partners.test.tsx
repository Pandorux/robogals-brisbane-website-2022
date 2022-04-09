import * as React from "react";
import { shallow } from "enzyme";
import OurPartners from "./our-partners";

describe("OurPartners", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OurPartners />);
    expect(wrapper).toMatchSnapshot();
  });
});
