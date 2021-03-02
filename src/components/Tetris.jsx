import React, { useState } from "react";

import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { Stage } from "./Stage";
import { Display } from "./Display";
import { StartButton } from "./StartButton";
import { createStage, checkCollision } from "../gameHelpers";
import { useStage } from '../hooks/useStage';
import { usePlayer } from '../hooks/usePlayer';
import { useInterval } from '../hooks/useInterval';

export const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log('re-render');

  const movePlayer = (dirX, dirY) => {
    if(!checkCollision(player, stage, { x: dirX*2, y: dirY*2 })) { //this is a predicted step
      updatePlayerPos({ x: dirX, y: dirY })
    }   
  }

  const startGame = () => {
    //reset everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  }

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) { //check for the next step
      updatePlayerPos({ x: 0, y: 0.5, collided: false });
      console.log(player.pos.y)
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

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      switch (keyCode) {
        
        case 37:
          movePlayer(-0.5, 0);
          break;
        case 39:
          movePlayer(0.5, 0);
          break;
        case 38:
          movePlayer(0, -0.5);
          console.log(player.pos.y)
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
        default:
          return;
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text={"Game Over"} />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}

          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};
