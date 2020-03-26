import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import StyledCellGif from "./index";

const wrapper = mount(
  <div>
    <StyledCellGif>Gif</StyledCellGif>
  </div>
);

describe("<StyledCellGif />", () => {
  test("render", () => {
    enzymeFind(wrapper, StyledCellGif);
  });
});
