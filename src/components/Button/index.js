import React from "react";
import PropTypes from "prop-types";
import StyledButton from "../styles/StyledButton";

const propTypes = {
  callback: PropTypes.func,
  name: PropTypes.string.isRequired
};

const Button = ({ callback, name }) => (
  <StyledButton onClick={callback}>{name}</StyledButton>
);

Button.defaultProps = {
  callback: () => {},
  name: "none"
};

Button.propTypes = propTypes;

export default Button;
