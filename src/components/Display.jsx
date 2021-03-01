import React from "react";
import { StyledDisplay } from './styles/StyledDisplay';

export const Display = ({ text, gameOver }) => (<StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>);
