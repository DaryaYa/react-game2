import React, { useState } from "react";

import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { Stage } from "./Stage";
import { Display } from "./Display";
import { StartButton } from "./StartButton";
import { createStage, checkCollision } from "../gameHelpers";
import { useStage } from '../hooks/useStage';
import { usePlayer } from '../hooks/usePlayer';
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus';
import { Footer } from './Footer';
// import useSound from "use-sound";
import { MusicButton } from './MusicButton';

export const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const movePlayer = (dirX, dirY) => {
    if(!checkCollision(player, stage, { x: dirX, y: dirY })) { //this is a predicted step
      updatePlayerPos({ x: dirX, y: dirY })
    }   
  }

  const startGame = () => {
    //reset everything
    setStage(createStage());
    resetPlayer();
    setDropTime(1000);
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  }

  const drop = () => {
    //Increase level when player has cleared 10 rows
    if(rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      //and increase speed a bit
      setDropTime(1000 /  (level + 1) + 250)
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) { //check for the next step
      updatePlayerPos({ x: 0, y: 1, collided: false });
    }    else {
      //GAME OVER
      if (player.pos.y < 1) {
        console.log("gAmOver")
        setDropTime(null);
        setGameOver(true);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true })
    }
  }

  const keyUp = ({ keyCode }) => {
    if(!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 250);
      }
    }
  }

  const gamePause = () => {
    alert('GAME PAUSED');
  } 

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  }

  // const handleMouse = event => {
    
  //   const { clientX, clientY } = event;
  //   console.log(clientX/100, clientY/100, player.pos.x, player.pos.y);

  //   if(clientX/100 > player.pos.x) {
  //    movePlayer(1, 0) }
  //    if (clientX/100 <= player.pos.x) {
  //      movePlayer(-1, 0)
  //    }
  //    if (clientY/100 > player.pos.y) {
  //      movePlayer(0, 1)
  //    } else {
  //      movePlayer(0, -1)
  //    }
  //   }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      switch (keyCode) {
        
        case 37:
          movePlayer(-1, 0);
          break;
        case 39:
          movePlayer(1, 0);
          break;
        case 38:
          movePlayer(0, -1);
          break;
        case 40:
          dropPlayer();
          break;
        case 87:
          playerRotate(stage, 1); // w - rotate clockwise
          break;
        case 69:
          playerRotate(stage, -1) // e - rotate ANTIclockwise  
          break;
        case 32:
          gamePause();
          break;
        default:
          return;
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
      // onMouseMove={(e) => handleMouse(e)}
    >
      <StyledTetris >
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text={"Game Over"} />
          ) : (
            <div>
              <MusicButton />
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}

          <StartButton callback={startGame} />
          <Display text={"← ↑ ↓ → , space, w, e - game controls"} />
        </aside>
      </StyledTetris>
      <Footer />
    </StyledTetrisWrapper>
  );
};
