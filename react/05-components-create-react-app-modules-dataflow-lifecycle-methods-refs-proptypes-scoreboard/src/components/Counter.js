import React from 'react';  // React must be imported in every module that uses React's API and JSC since each module has its own scope
import PropTypes from 'prop-types';
import { Consumer } from './Context';

// Counter class was converted back into a stateless functional component
// (Component also removed from imports) to keep App the only statefull component,
// and the kee unidirectional data flow 

/*
class Counter extends Component {
*/
const Counter = ({ index }) => {   // deconstructing assignment of props. score and scoreChange removed after passing functions in the actions object via context

    // score originally defined as local state in the Counter class. 
    // We "lifted up" to the common parent (managed as high in the application as possible) as a prop
    /*
    state = {
      score: 0 
    };
    */

    // decrementScore and incrementScore functions originally defined here have been moved up
    // to App into a single function handleScoreChange, and the result passed as the scoreChange prop

    // Also, we now indetify each player via s index
    // let index = index;  // not needed with the deconstructing assignment

    /* render() { */  // removed when rewritting from statefull class component into stateless functional component
    return (
        <Consumer>
            { ({ players, actions }) => (   // implicit return
                <div className="counter">
                    <button className="counter-action decrement" onClick={() => actions.scoreChange(index,-1)}> 
                    -
                    </button>
                    <span className="counter-score">{ players[index].score }</span>   {/* first re-defined score as a prop instead of a state --> then, extracted from context */}
                    <button className="counter-action increment" onClick={() => actions.scoreChange(index,1)}>
                    +
                </button>
                </div>
            )}
        </Consumer>
    );
    /* } */
}

// Assign the propTypes property to the function component Counter:
// (For perfomane reasons, proptypes are only checked in development mode)
Counter.propTypes = {
    index: PropTypes.number
    /* //removed when passing functions in the actions object via context:
    score: PropTypes.number, 
    scoreChange: PropTypes.func */
};

export default Counter;

// The Counter class and its export could also be written as:
/*
export default class Counter extends Component {
    render() { ... }
}
*/
// or
