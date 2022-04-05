/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let score = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
const mainHTML = document.querySelector("main");

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const ans1 = prompt("Netherlands' capital?");
if ( ans1.toLowerCase() === 'amsterdam' ) {
  score += 1;

const ans2 = prompt("World's most populated country?");
if ( ans2.toLowerCase() === 'china' ) {
  score += 1;
}

const ans3 = prompt("In which continent is the Nile river?");
if ( ans3.toLowerCase() === 'africa' ) {
  score += 1;
}

const ans4 = prompt("Largest ocean?");
if ( ans4.toLowerCase() === 'pacific' ) {
  score += 1;
}

const ans5 = prompt("Fifth planet in the solar system?");
if ( ans5.toLowerCase() === 'saturn' ) {
  score += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


if ( score === 5 ) {
  rank = 'Gold';
} else if ( 3 <= score && score <= 4 ) {
  rank = 'Silver';
} else if ( 1 <= score && score <= 2 ) {
  rank = 'Bronze';
} else {
  rank = 'No crown';
}

// 6. Output results to the <main> element
message = `<p>Your score: <strong>${score}</strong></p>
<p>Your rank: <strong>${rank}</strong></p>`;
mainHTML.innerHTML = message;

