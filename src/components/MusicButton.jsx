import React from 'react';
import useSound from "use-sound";
import music from '../Feel_My_Heart.mp3';
import { StyledStartButton } from "./styles/StyledStartButton";

export const MusicButton = () => {

  const [play, { stop, isPlaying }] = useSound(music);

  const handleClick = () => {
    if(isPlaying) {
      stop()
    } else{ play()}
  }

  return <StyledStartButton onClick={handleClick}>{isPlaying ? 'Music OFF' : 'Music ON'}</StyledStartButton>;
    
};