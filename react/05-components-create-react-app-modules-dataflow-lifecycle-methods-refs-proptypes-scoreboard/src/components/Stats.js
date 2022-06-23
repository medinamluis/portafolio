import React from 'react';
// import PropTypes from 'prop-types';  
import { Consumer } from './Context';

//const Stats = ({ players }) => {   // Deconstructing props in the function parameters
const Stats = () => {   // props no longer needed when passing players directly to this consumer via context
    return (
        // To render anything insider a Consumer, use the pattern called Render Prop (aka [arrow] function as a child):
        <Consumer> 
            { ({ players }) => {    // the parameter context (sometimes called value) will 1) take the "value" prop passed of the Provider: here, the object containing players and some functions defined in App (actions object), and 2) return the JSX of what we want to render  --> Then, we destructure the context and then context.players -> players
                const totalPlayers = players.length;
                const totalScore = players.reduce(
                    (totalAccum, player) => {
                        return totalAccum + player.score;
                    }, 0 );  // 0 is the initial value of the accumulator total 

                return (
                    <table className='stats'>
                        <tbody>
                            <tr>
                                <td>Players:</td>
                                <td>{ totalPlayers }</td>
                            </tr>
                            <tr>
                                <td>Total Points:</td>
                                <td>{ totalScore }</td>
                            </tr>
                        </tbody>
                    </table>
                );
            }}
        </Consumer>

    );
}

// props no longer needed when passing players directly to this consuer via context
/*
// PropTypes:
Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    })),
};
*/

export default Stats;