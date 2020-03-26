import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import StyledTetrisWrapper from "./index";

const wrapper = mount(
  <div>
    <StyledTetrisWrapper>Tetris</StyledTetrisWrapper>
  </div>
);

describe("<StyledTetrisWrapper />", () => {
  test("render", () => {
    enzymeFind(wrapper, StyledTetrisWrapper);
  });
});
