import React from 'react';  // React must be imported in every module that uses React's API and JSC since each module has its own scope
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ title }) => {   // Deconstructing props in the function parameters (players prop removed here and in <Stats> after passing it to Stats directly as context)
    return (
      <header>
        <Stats
          // players={players}
        />
        <h1>{ title }</h1>
        {/* The New Stats component replaces the original <span className="stats">Players: {props.totalPlayers}</span>  */}
        <Stopwatch />
      </header>
    );
}

// PropTypes:
Header.propTypes = {
  title: PropTypes.string,
  //players: PropTypes.arrayOf(PropTypes.object) -> prop no longer needed when passing it as context directly to Stats
};

// Default values for PropTypes:
Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;

// The Header function and its export could also be written as:
/*
export const Header = () => {
    return ( ... );
}
*/
// and the imported as 
/*
import { CouHeadernter } from './Header';
*/
