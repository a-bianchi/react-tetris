import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import StyledGameOver from "./index";

const wrapper = mount(
  <div>
    <StyledGameOver>"Game over"</StyledGameOver>
  </div>
);

describe("<StyledGameOver />", () => {
  test("render", () => {
    enzymeFind(wrapper, StyledGameOver);
  });
});
