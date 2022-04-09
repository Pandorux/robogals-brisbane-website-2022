import * as React from "react";
import { shallow } from "enzyme";
import Router from "./router";

describe("Router", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Router />);
    expect(wrapper).toMatchSnapshot();
  });
});
