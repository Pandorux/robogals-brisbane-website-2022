import * as React from "react";
import { shallow } from "enzyme";
import GettingInvolved from "./getting-involved";

describe("GettingInvolved", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GettingInvolved />);
    expect(wrapper).toMatchSnapshot();
  });
});
