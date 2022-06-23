import React, { useContext } from 'react';
import { ScoreboardContext } from './Context';
import Player from './Player';

const PlayerList = () => {
  const { players, actions } = useContext(ScoreboardContext);
  const highScore = actions.getHighScore(players);
  return (
    <>
      {players.map( (player, index) =>
        <Player 
          key={player.id.toString()} 
          index={index}
          isHighScore={highScore === player.score}
        />
      )}
    </>
  );
}

export default PlayerList;