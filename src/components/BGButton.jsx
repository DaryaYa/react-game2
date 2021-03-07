import { StyledStartButton } from "./styles/StyledStartButton";
const UNSPLASH_KEY =
  "7f3414d36c39132ae4aae83156a242d1c6ce22dbadf927f69b5e1ddbb4c2842c";

export const BGButton = () => {

	function getLinkToImage() {
    const url = `https://api.unsplash.com/photos/random?query=nature&client_id=${UNSPLASH_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        document.body.style.backgroundImage = `url("${data.urls.regular}")`;
      });
  }

  return <StyledStartButton onClick={getLinkToImage}>Change BG</StyledStartButton>; 
} 