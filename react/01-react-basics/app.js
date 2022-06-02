const players = [
  // It's IMPORTANT to have a unique key when creating React elements based on item iteration and that might be deleted (or more elements added)
  {
    name: "Guil",
    score: 50,
    id: 1    
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];

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
// Defined as a JS statefull class component:
class Counter extends React.Component {
  
  // constructor() is a special method to outline (initialise) the properties of the class. When creating an object of this class, this is the method that gets called (you can pass it parameters):
  /*
  constructor() {
    super()   // To call the constructor of the React.Component class (called before any use of 'this.'):
    this.state = {     // Initialise the component's state (must be called 'state', it is a special keyword)
      score: 0
    };
  }
  */
  // the initialisation of the component's state above can be shortened with JSX/Babel as (must be called state, it is a speciial keyword)
  state = {
    score: 0
  };

  // Change state: pass an object with the properties to chage. It will trigger a call to render().
  // By default, any custom method of a class component that extends React.Component are not bound to the component ('this.' won't work, it's undefined). To bind them, one needs to pass the context upon calling the decrementScore method in the event handler (see below).
  decrementScore() {
    console.log(this);  // --> undefined, unless context is passed
    this.setState(
      // It's better to use a callback function when setting a state, since setState can be asynchronous: more requests (clicks) might be done before rendering is done, several request might be bundled for performance reasons, etc. So it's better to update based on the retrieved previous state (the parameter in the arrow function passed to this.State will be understood in React to be the previous state).
      // Note the parenthesis on the single-line return of the arrow function (synthax to return object literals):
      prevState => ( {score: prevState.score - 1} )
    );
  }

  // Taking advantage of the lexical this binding of arrow functions, we can rewrite the analogous increment method as:
  incrementScore = () => {
    console.log(this);  // --> always defined
    this.setState(
      prevState => ( {score: prevState.score + 1} )
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
        {props.name}
      </span>
      <Counter />
    </div>
  );
}

// APP COMPONENT
// Note the passing of props from the parent component down to its children.
// For passing anything other than string (numbers, variables, etc.), use {}.
// For strings, use always double quotes (HTML-like)
const App = (props) => {
  return (
    <div className="scoreboard">
      <Header
        title="My Scoreboard"
        totalPlayers={props.initialPlayers.length}
      />
    
      {/* Players list. IMPORTANT to assign a unique identifier (string) to each React element with the special 'key' property (since they are created based on iteration, and might be deleted or more elements be added  */}
      { props.initialPlayers.map( player =>
        <Player
          name={player.name}
          key={player.id.toString()}
        />
      )}
    </div>
  );
}

// HEADER COMPONENT
const root = ReactDOM.createRoot( document.getElementById('root') );
// The user-defined tag name must exactly match the name of the function. It's also a self-contained JSX, so add ' /'!
//root.render(<Header />);
//root.render(<Player />);
root.render(<App initialPlayers={players}/>);
