import React from "react";
import { shallow, mount } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  it("Should be defined", () => {
    expect(Button.defaultProps.name).toBeDefined();
  });
  it("should render correctly", () => {
    const name = "Im Button";
    const tree = shallow(<Button name={name} callback={() => "something"} />);
    //expect(tree.find(".table-task")).toBeDefined();
    //expect(tree.find(".task-0")).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
