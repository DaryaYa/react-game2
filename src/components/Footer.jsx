import React from "react";
import { StyledFooter } from "./styles/StyledFooter";
import ghLogo from "../img/github-logo.png";
import rsSchool from "../img/rs_school_js.svg";

export const Footer = () => (
  <StyledFooter>
    <a href="https://github.com/DaryaYa">
      <img src={ghLogo} alt="GH logo" />
    </a>
    <a href="https://rs.school/react/">
      <img src={rsSchool} alt="RS SCHOOL" />
    </a>
  </StyledFooter>
);
