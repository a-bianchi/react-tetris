import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import StyledCell from "./index";

const wrapper = mount(
  <div>
    <StyledCell type={"0"} color={"80, 227, 230"}>
      Cell
    </StyledCell>
  </div>
);

describe("<StyledCell />", () => {
  test("render", () => {
    enzymeFind(wrapper, StyledCell);
  });
});
