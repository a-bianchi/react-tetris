import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import StyledButton from "./index";

const wrapper = mount(
  <div>
    <StyledButton>"Game over"</StyledButton>
  </div>
);

describe("<StyledButton />", () => {
  test("render", () => {
    enzymeFind(wrapper, StyledButton);
  });
});
