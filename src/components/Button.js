import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const Button = ({ callback, name }) => (
  <StyledStartButton onClick={callback}>{name}</StyledStartButton>
);

export default Button;
