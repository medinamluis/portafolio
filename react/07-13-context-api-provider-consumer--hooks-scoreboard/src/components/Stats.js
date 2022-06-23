import React, { useContext } from 'react';
import { ScoreboardContext } from './Context';

const Stats = () => {

  // useContext hook instead of the <Consumer> used in Context API.
  // Returns an object with the current context, and access the state with deconstructing assignment.
  const { players } = useContext(ScoreboardContext);
  const totalPlayers = players.length;
  const totalScore = players.reduce(
    (totalAccum, player) => {
      return totalAccum + player.score;
    }, 0);  // 0 is the initial value of the accumulator total 

  return (
    <table className="stats">
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
}

export default Stats;