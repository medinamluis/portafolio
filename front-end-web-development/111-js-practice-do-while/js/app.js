const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let message;

// Keept track of the number of attempts
let attempts = 0;
const attemptsLimit = 3;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

console.log(`guess: ${randomNumber}`);

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
do {
  // do-while to run it at least once
  guess = parseInt(prompt(`Guess a number between 0 and 10. You've got ${attemptsLimit} attempts!`));
  attempts++;
  console.log(`guess: ${guess}`);
  //  2) End the loop when the user's guess matches the random number
  if (guess === randomNumber) {
    message = `<h1>You guess the number in ${attempts} attempt(s).<br>It was ${guess} (= ${randomNumber})!</h1>`;
    break;
  } else {
    `<h1>You did not guess the number within ${attemptsLimit} attempts.<br>It was ${randomNumber}!</h1>`;
  }
} while (attempts < attemptsLimit);
// The while loop can be replaced with a for loop:
/*
for (let attempts = 0; attempts < attemptsLimit, attempts++) {
  ...
}
*/

//  3) Display a message letting the user know they guessed the number

main.innerHTML = message;
