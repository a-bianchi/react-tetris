import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import StyledDisplay from "./index";

const wrapper = mount(
  <div>
    <StyledDisplay gameOver={"#fff"}>"Game Over"</StyledDisplay>
  </div>
);

describe("<StyledDisplay />", () => {
  test("render", () => {
    enzymeFind(wrapper, StyledDisplay);
  });
});
