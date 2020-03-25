import React from "react";
import { StyledCellGif } from "./styles/StyledCellGif";
import { StyledTitle } from "./styles/StyledTitle";
import { StyledDot } from "./styles/StyledDot";

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

export default Cardgif;
