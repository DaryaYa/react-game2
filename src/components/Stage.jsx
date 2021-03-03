import React from "react";
import { StyledStaged } from './styles/StyledStage';
import Cell from "./Cell";

export const Stage = ({ stage }) => (
  <StyledStaged width={stage[0].length} height={stage.length} >
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStaged>
);
