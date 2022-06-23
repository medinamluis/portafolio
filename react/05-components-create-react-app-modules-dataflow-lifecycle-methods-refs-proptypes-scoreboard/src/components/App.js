// ============================
// Original React App template:
// ============================

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// ===============================
// From Treehouse's Score project:
// ===============================

// React must be imported in every module that uses React's API and JSC since each module has its own scope
//import React, { Component } from 'react';   // { named export } -> named import
import React from 'react';   // Component not needed after converting App into stateless functional component (state was moved into a Provider)
//import { Provider } from './Context';   // an index.js file will be looked for automatically, so no need to specify ./Context/index.js  --> No londer neded when importing the HOC Provider at the top-level entry file index.js (the one outside of components/)
import Header from './Header';
import PlayersList from './PlayersList';
import AddPlayerForm from './AddPlayerForm'

// class App extends Component {  // Only stateful component
const App = () => {   // App converted into a simple stateless functional component after moving the state into a separate Provider

  // Global state, to be passed to its children
  /* state = {       \
    players: [...],   > ->  Moved all to the Higher-Order Component (HOC) Provider in index.js
    topPlayers: []   /
  }; */ 

  // Functions handleScoreChange, (decrementScore, deprecated), handleRemovePlayer, and handleAddPlayer
  // also moved from here to the HOC Provider in index.js

  // Also, function getHighScore moved to the HOC Provider.

  //render() { --> not needed when App is a stateless functional component an not at stateful component
    return (
      // Provide (at the top) the context to all children of App with <Provider>:
      // by passing players and the functions used by Header/Stats, and Player/PlayersList/Counter, 
      // we avoid prop drilling
      // <Provider ...>  --> Also moved to the HOC Provider in index.js
        <div className="scoreboard">

          <Header
            // title="Scoreboard" --> Omitted since a default prop has been given for title in the Header definition
            // We orginally passed the full list (instead of only totalPlayers={this.state.players.length})
            // since we want to calculate other properties of it.
            // Note that this contituted prop drilling (aka threading) for players:
            // it was not actually needed by Header to render anything based on it,
            // Header would only pass it to Stats internally
            // players={this.state.players}   --> Removed with Provider/Consumer
          />
    
          <PlayersList
            //players={this.state.players} --> Same reason as above
            /* // functions passed as props are removed after passing functions in the actions object via context
            handleScoreChange={this.handleScoreChange}
            handleRemovePlayer={this.handleRemovePlayer} */
            /*  Rewritten into Provider and no longer needed:
            getHighScore={this.getHighScore}
            highScore={this.state.highScore}
            */
          />
          
          <AddPlayerForm
            //addPlayer={this.handleAddPlayer}  --> removed after passing functions in the actions object via context
          /> 

        </div>
      //</Provider>
    );
  //}
}

export default App;

