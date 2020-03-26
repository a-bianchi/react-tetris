import React from "react";
import PropTypes from "prop-types";
import StyledCellGif from "../styles/StyledCellGif";
import StyledTitle from "../styles/StyledTitle";
import StyledDot from "../styles/StyledDot";

const propTypes = {
  gifurl: PropTypes.string.isRequired
};

const Cardgif = gifurl => {
  const { gifurl: gif } = gifurl;
  return (
    <div>
      <StyledTitle>
        <StyledDot /> Live Russia
      </StyledTitle>
      <StyledCellGif>
        {" "}
        <img src={gif} alt="Live Russia" height="150" width="150" />{" "}
      </StyledCellGif>
    </div>
  );
};

Cardgif.defaultProps = {
  gifurl: "https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif"
};

Cardgif.propTypes = propTypes;

export default Cardgif;
