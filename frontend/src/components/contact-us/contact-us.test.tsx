import * as React from "react";
import { shallow } from "enzyme";
import ContactUs from "./contact-us";

describe("ContactUs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ContactUs />);
    expect(wrapper).toMatchSnapshot();
  });
});
