import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  // Destructure the values return by useStatte: [value, function], corresponding to this.state and this.setState in class components.
  // Here, score can be any JS primitive, unlike the state in classes, which always has to be an object
  const [ score, setScore ] = useState(0);  // here score = 0  is iniatilised
  const [ message ] = useState('Welcome');
  const [ data, setData ] = useState('');

  // useEffect is the hook that corresponds to the class lifecycles componentDidMount, componentDidUpdate, and componentWillUnmount combined
  // Called every time the component renders: when it 1st renders and every time we change the score with the buttons
  useEffect(   
    () => {   // 1st argument: a function
      console.log('useEffect called to update DOM!');
      document.title = `${message}! You score is ${score}`;   // state is available from inside useEffect, used here to update the DOM
    },   
    [message, score]  // 2nd argument (optional): to prevent useless re-rendering, pass an array with the effect's dependencies to only re-render upon their change. To only run ONCE, pass an empty array.
  );  

  // useEffect is commonly used to fectch data from an API:
  useEffect(
    () => {
      console.log('useEffect called to fetch API request!');
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setData(data.message))
        .catch(err => console.log('Oh noes!', err))
    },
    []   // Be careful! Omitting the [] might cause useEffect to execute in an infinite loop, endlessly fetching data. This is because we are modifying the component's state inside useEffect, which triggers the effect again and again
  );

  // In classes, is common to clean-up in componentWillUnmount to prevent memory leak.
  // With hooks, return a function as part of useEffect() that will take care of the clean-up;
  // it will get automatically called when it is time to clean-up (when the component unmounts)

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message }</h1>
        <h2>Score: { score }</h2>
        <img src={data} alt="A random dog breed" />
        {/* Updates the score: */}
        <button onClick={ () => setScore(score - 1) } >   {/* If we need to update based on previous state, you still do setScore(prevScore => prevScore - 1) */}
          Decrease Score
        </button>
        <button onClick={ () => setScore(score + 1) } >
          Increase Score
        </button>
        <button onClick={ () => setScore(0) } >
          Reset Score
        </button>
      </header>
    </div>
  );
}

export default App;
