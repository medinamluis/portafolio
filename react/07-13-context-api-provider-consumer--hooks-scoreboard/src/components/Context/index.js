import React, { useState } from 'react';

export const ScoreboardContext = React.createContext()

let id = 0;

export const Provider = (props) => {
  const [players, setPlayers] = useState(
    [
      {
      id: 1,
      name: "Guil",
      score: 0
      },
      {
      id: 2,
      name: "Treasure",
      score: 0
      },
      {
      id: 3,
      name: "Ashley",
      score: 0
      },
      {
      id: 4,
      name: "James",
      score: 0
      }
    ]
  );

  const handleScoreChange = (index, delta) => {
    setPlayers(prevState => {
      const updatedPlayers = [ ...prevState ];
      const updatedPlayer = { ...updatedPlayers[index] };

      updatedPlayer.score += delta;
      if (updatedPlayer.score <= 0) {
        updatedPlayer.score = 0;
      }
      updatedPlayers[index] = updatedPlayer;

      return updatedPlayers;
    });
  };

  const handleRemovePlayer = (id) => { 
    setPlayers( prevState => prevState.filter(p => p.id !== id) );
  };

  const handleAddPlayer = (name) =>  {
    setPlayers(prevState => {
      return [
        ...prevState, 
        {
          name,
          score: 0,
          id: id += 1
        }
      ]
    });    
  };

  // Leader(s) gold crown icon:
  const getHighScore = (playersObject) => {
    const listScores = playersObject.map( (player) => player.score );   // Extracting listScores
    const highScore = Math.max(...listScores);
    if (highScore) {
        return highScore;
    } else {
        return null;
    }
  }

  return (
    <ScoreboardContext.Provider value={{ 
      players,
      actions: {
        changeScore: handleScoreChange,
        removePlayer: handleRemovePlayer,
        addPlayer: handleAddPlayer,
        getHighScore: getHighScore,
      }
    }}>
      { props.children }
    </ScoreboardContext.Provider>
  );
};