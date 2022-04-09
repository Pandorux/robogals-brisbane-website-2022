import * as React from "react";
import { shallow } from "enzyme";
import UpcomingWorkshops from "./upcoming-workshops";

describe("UpcomingWorkshops", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UpcomingWorkshops />);
    expect(wrapper).toMatchSnapshot();
  });
});
