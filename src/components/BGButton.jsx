import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

export const BGButton = () => {

	function getLinkToImage() {
    const url = `https://api.unsplash.com/photos/random?query=nature&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        document.body.style.backgroundImage = `url("${data.urls.regular}")`;
      });
  }

  return <StyledStartButton onClick={getLinkToImage}>Change BG</StyledStartButton>; 
} 