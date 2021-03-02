import { useState, useCallback } from 'react';
import { randomTet } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelpers';

export const usePlayer = () => {
	// initial state for the player
	const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTet().shape,
		collided: false,
  });

	const updatePlayerPos = ({ x, y, collided }) => {
		setPlayer(prev => ({
			...prev,
			pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
			collided,
		}))
	}

	const resetPlayer = useCallback(() => {
		setPlayer({
      pos: { x: STAGE_WIDTH /2 -2, y: 0 }, // set the new tetromino approximately into the middle of the stage
      tetromino: randomTet().shape,
			collided: false,
    });
	}, [])

	return [player, updatePlayerPos, resetPlayer];
}