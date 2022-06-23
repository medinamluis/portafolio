import React, { PureComponent} from 'react';  // React must be imported in every module that uses React's API and JSC since each module has its own scope
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import LeaderIcon from './LeaderIcon'

class Player extends PureComponent {  // to optimize performance
// const Player = (this.props) => {

  // PropTypes can also be declared in class component as static propTypes.
  // Props can also be made mandatory by appending .isRequired: if not provided, 
  // a warning will be thrown, instead of simply not rendering the component for 
  // which the paramters are missing
  static propTypes = {
    index: PropTypes.number.isRequired,
    /* // functions passed as props are removed after passing functions in the actions object via context
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    scoreChange: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired, */
    /* Rewritten into Provier and no longer needed"
    getHighScore: PropTypes.func,
    highScore: PropTypes.number // arrayOf(PropTypes.number)
    */
    isHighScore: PropTypes.bool
  }

  /* TODO:
  componentDidMount() {
    this.props.getTopPlayers();
  } */

  render() {
    // console.log(`${name} rendered`);  // All players will be re-rendered everyime there's a change in any of them, unless we redefine Player as a PureComponent (instead of a stateful functional component [arrow function], as it originaly was)
    // Here, deconstruncting assignment is done via variable assignment:
    const {
      index,
      /* // Removed after passing functions in the actions object via context:
      id,
      name,
      score,
      scoreChange,
      removePlayer, */
      isHighScore
    } = this.props;
    
    // console.log(topPlayers);
    
    return (
      <div className="player">
        {/* The Consumer does not need to wrapt the full returned JSX, but only where the context is needed */}
        <Consumer>
          { ({ players, actions }) => (   // Destructuring the Consumer's context 
          <span className="player-name">
            <button
              className="remove-player"
              onClick={() => actions.removePlayer(players[index].id)}> {/* context.actions -> actions after destructuring */}
            ✖
            </button>   
            <LeaderIcon isHighScore={isHighScore} />   {/* isHighScore={ topPlayers.includes(id) */}
            {players[index].name}
          </span>
          )}
        </Consumer>

        <Counter
            index={index}
            /* // removed after passing functions in the actions object via context
            score={score}   // re-defined score as a prop instead of a state
            scoreChange={scoreChange} */
            />  
      </div>
    );
  }
}

export default Player;