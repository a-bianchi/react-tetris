import React from "react";
import PropTypes from "prop-types";
import StyledDisplay from "../styles/StyledDisplay";

const propTypes = {
  gameOver: PropTypes.boolean,
  text: PropTypes.string.isRequired
};

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

Display.defaultProps = {
  gameOver: false,
  text: "default text"
};

Display.propTypes = propTypes;

export default Display;
