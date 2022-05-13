/*
  The Number Guessing Game
  stores a number between 1 and 10
  and gives a player one attempt
  to guess the number.
*/

// When the game begins, the guess is false
let correctGuess = false;
const number = 6;
const guess = prompt("Guess a number between 1 and 10");

/*
  1. Thest if a player's guess matches the number,
  2. Change the value of correctGuess to true if they match
*/

if ( +guess === number ) {
  correctGuess = true;  // number to guess
}

// Test if guess is correct and output response
if ( correctGuess === true ) {
  console.log('You guessed it!');
} else {
  console.log(`Sorry. The number was ${number}.`);
}
