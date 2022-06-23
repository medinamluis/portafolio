import React from 'react';
// import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Player from './Player';

const PlayersList = () => {   // the handleScoreChange and handleRemovePlayer props are all removed after passing functions in the actions object via context. The getHighScore, highScore props are no longer needed after functionality rewritten in Provider
    return (
        // group sibling elements with React.Fragment w/o having to added a wrapper element, it does not render anything out to the DOM
        <React.Fragment>
            <Consumer>
                { ({ players, actions }) => {   // Destructuring the Consumer's context
                    //console.log(context);
                    const highScore = actions.getHighScore(players);
                    //console.log(highScore);
                    return (   // can be rewritten with implicit return: return(...) -> (...)
                        players.map( (player, index) =>      // context.players -> players after destructuring
                            <Player 
                                key={player.id.toString()}   // special key, unique identifier
                                index={index}
                                //{...player}  // Note the prop drilling (aka threading) for score: not actually needed by Player to render anything based on it, Player will only pass it to Counter internally --> Furthermore, once players is passed in context, it is not longer needed here
                                /* // functions passed as props are removed after passing functions in the actions object via context
                                changeScore={handleScoreChange}
                                removePlayer={handleRemovePlayer} */
                                // getHighScore={getHighScore}    // re-evaluate the list of top players when rendering a player --> Rewritten into Provider and no lonver needed */
                                isHighScore={highScore === player.score}
                            />
                        )
                    )
                }}
            </Consumer>
        </React.Fragment>
    );
};

// PlayersList.propTypes = {
    /* // functions passed as props are removed after passing functions in the actions object via context
    handleScoreChange: PropTypes.func.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired, */
    // Rrwritten into Provier and no longer needed:
    /* getHighScore: PropTypes.func,
    highScore: PropTypes.number */
//}

export default PlayersList;