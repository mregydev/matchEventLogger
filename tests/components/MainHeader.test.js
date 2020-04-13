import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import MainHeader from "../../src/components/MainHeader";

describe("<MainHeader /> test cases", () => {
  test("renders", () => {
    const wrapper = shallow(<MainHeader />);
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
