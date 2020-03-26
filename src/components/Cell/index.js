import React from "react";
import PropTypes from "prop-types";
import StyledCell from "../styles/StyledCell";
import { TETROMINOS } from "../../tetrominos";

const propTypes = {
  type: PropTypes.number.isRequired
};

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

Cell.defaultProps = {
  type: 0
};

Cell.propTypes = propTypes;

export default React.memo(Cell);
