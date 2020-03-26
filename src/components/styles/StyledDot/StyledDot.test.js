import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import StyledDot from "./index";

const wrapper = mount(
  <div>
    <StyledDot>"Live russian"</StyledDot>
  </div>
);

describe("<StyledDot />", () => {
  test("render", () => {
    enzymeFind(wrapper, StyledDot);
  });
});
