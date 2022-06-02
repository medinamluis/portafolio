// HEADER COMPONENT
// React component defined as a JS stateless functional component.
// Component's name is required to begin with an upper case letter to differentiate from native DOM elements
/*
function Header() { 
  // note the parenthesis for the multiline return
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}
*/
// Alternatively, as an arrow function (note that even the {} and return() keyword can omitted)
// Enable the use of props using parameter (commonly) called props
const Header = (props) => {
  console.log(props);  // -> note that props is an object
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

// COUNTER COMPONENT
// Defined as a JS stateful class component:
class Counter extends React.Component {
  
  // Initialisation of state (available only locally within this componenet -> component state)
  // constructor() is a special method to outline (initialise) the properties of the class. When creating an object of this class, this is the method that gets called (you can pass it parameters):
  /*
  constructor() {
    super()   // To call the constructor of the React.Component class (called before any use of 'this.'):
    this.state = {     // Initialise the component's state (must be called 'state', it is a special keyword): an object that stores all data that the component needs, and that might be passed down to its children
      score: 0
    };
  }
  */
  // The initialisation of the component's state above can be shortened with JSX/Babel as (must be called state, it is a speciial keyword)
  state = {
    score: 0
  };

  // Change state: pass an object with the properties to chage. It will trigger a call to render().
  // By default, any custom method of a class component that extends React.Component are not bound to the component ('this.' won't work, it's undefined). To bind them, one needs to pass the context upon calling the decrementScore method in the event handler (see below).
  decrementScore() {
    console.log(this);  // --> undefined, unless context is passed
    this.setState(
      // It's better to use a callback function when setting a state (don't rely simply on this.state = something directly), since setState can be asynchronous: more requests (clicks) might be done before rendering is done, several request might be bundled for performance reasons, etc. So it's better to update based on the retrieved previous state (the parameter in the arrow function passed to this.State will be understood in React to be the previous state).
      prevState => ({
        score: (prevState.score > 0) ? prevState.score - 1 : prevState.score = 0
      })
    );
  }

  // Taking advantage of the lexical this binding of arrow functions, we can rewrite the analogous increment method as:
  incrementScore = () => {
    console.log(this);  // --> always defined
    this.setState(
      prevState => ({
        score: prevState.score + 1
      })
    );
  }
  
  // render() is must in a React.Component subblass
  // Access the components' props or states with this.props and this.state for stateless functional componenets and class components, repectively.
  // It get's called everytime there's a change in props or state.
  // React event (simlar to JS events, written with camelCase) added to buttons.
  // We pass the context for 'this' (the created instance of the Counter class) on the reference to decrementScore with either
  // A) this.decrementScore.bind(this) [note the lack of parenthesis on the reference to the method --this.decrementScore and not this.decrementScore()--: adding them would call the function at page load, which is not desired -- we only want to call it on demand/click)]; or
  // B) () => this.decrementScore() [note the parenthesis], by taking advantage of lexical-this-binding of arrow functions (automatically binds them to the scope where they are defined, here being inside render, an instance of the Counter component instance)
  // C) If we defined the method already as an arrow function (as it is for the increment method), we only need to reference the method in the event as this.incrementScore [no parenthesis].
  render() {
    // console.log(this);  // --> the instance of the Counter class
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }

}

// PLAYER COMPONENT
const Player = (props) => {
  // Note the composition: using a component (Counter) inside another component (Player)
  // No need to pass score to Counter, since Counter maintains a counter on its own
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        {props.name}
      </span>
      <Counter />
    </div>
  );
}

// APP COMPONENT
// Also defined now as a statefull class component in charge of rendering player componenets, which are now elements on the players state. Also, props.initialPlayers -> this.state.players in render()
class App extends React.Component {
  
  // Initialisation of state (available to all children -> application state)
  state = {
      // It's IMPORTANT to have a unique key when creating React elements based on item iteration and that might be deleted (or more elements added)
    players: [
      {
        name: "Guil",
        id: 1    
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };
  
  handleRemovePlayer = (id) => {
    this.setState(
      // Object with change to state. Remember: never mutate states directly! Create new array with the desired player removed
      prevState => {
        return {
          players: prevState.players.filter( p => p.id !== id )
        };
      }
    );
  }
  
  render() {
    // Note that data from state is distributed throught the application via props
    return (
      <div className="scoreboard">
        <Header
          title="My Scoreboard"
          totalPlayers={this.state.players.length}
        />
      
        {/* Players list. IMPORTANT to assign a unique identifier (string) to each React element with the special key property (since they are created based on iteration, and might be deleted or more elements be added  */}
        { this.state.players.map( player =>
          <Player
            name={player.name}
            key={player.id.toString()}    // special key, we can're reuse this
            id={player.id}
            removePlayer={this.handleRemovePlayer}  // Passing a function/data as a prop to each Player component
          />
        )}
      </div>
    );
  }

}

// HEADER COMPONENT
const root = ReactDOM.createRoot( document.getElementById('root') );
// The user-defined tag name must exactly match the name of the function. It's also a self-contained JSX, so add ' /'!
//root.render(<Header />);
//root.render(<Player />);
root.render(<App />);  // No need to pass the props initialPlayers={players} to App when defined as a class with players as a state
