import React from "react";
import PropTypes from "prop-types";
import StyledStage from "../styles/StyledStage";

import Cell from "../Cell";

const propTypes = {
  stage: PropTypes.array.isRequired
};

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

Stage.defaultProps = {
  stage: []
};

Stage.propTypes = propTypes;

export default Stage;
