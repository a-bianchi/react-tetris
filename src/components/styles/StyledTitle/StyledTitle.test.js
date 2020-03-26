import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import StyledTitle from "./index";

const wrapper = mount(
  <div>
    <StyledTitle>Im title</StyledTitle>
  </div>
);

describe("<StyledTitle />", () => {
  test("render", () => {
    enzymeFind(wrapper, StyledTitle);
  });
});
