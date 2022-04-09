import * as React from "react";
import { shallow } from "enzyme";
import PartnerEvents from "./partner-events";

describe("PartnerEvents", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PartnerEvents />);
    expect(wrapper).toMatchSnapshot();
  });
});
