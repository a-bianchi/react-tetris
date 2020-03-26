import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import StyledTetris from "./index";

const wrapper = mount(
  <div>
    <StyledTetris>Tetris</StyledTetris>
  </div>
);

describe("<StyledTetris />", () => {
  test("render", () => {
    enzymeFind(wrapper, StyledTetris);
  });
});
