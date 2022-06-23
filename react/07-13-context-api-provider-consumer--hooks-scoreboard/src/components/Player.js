import React, { useContext} from 'react';
import PropTypes from 'prop-types';
import { ScoreboardContext } from './Context';
import Counter from './Counter';
import LeaderIcon from './LeaderIcon'

const Player = ({ index, isHighScore }) => {
    const { players, actions } = useContext(ScoreboardContext);
    return ( 
      <div className="player">
        <span className="player-name">
          <button 
            className="remove-player" 
            onClick={() => actions.removePlayer(players[index].id)}>
          ✖
          </button>
          <LeaderIcon isHighScore={isHighScore} />
          { players[index].name }
        </span>
        <Counter index={index} />
      </div>
    );
};

Player.propTypes = {
  index: PropTypes.number,
  isHighScore: PropTypes.bool
};

export default Player;