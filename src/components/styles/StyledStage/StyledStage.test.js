import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import StyledStage from "./index";

const wrapper = mount(
  <div>
    <StyledStage width={10} height={10}>
      "Game over"
    </StyledStage>
  </div>
);

describe("<StyledStage />", () => {
  test("render", () => {
    enzymeFind(wrapper, StyledStage);
  });
});
