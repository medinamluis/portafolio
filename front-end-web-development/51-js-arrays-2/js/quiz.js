// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
  ['1+1=?', '2'],
  ['Closest planet to the Sun?', 'Mercury'],
  ['Conjugation of the verb "to be" in the past for the 2nd person singular (you)', 'were'],
];
  
// 2. Store the indices of the correct answers:
const correctAnswerIndices = [];

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for ( let round = 0; round < quiz.length; round++ ) {
  let userAns = prompt( quiz[round][0] );
  if ( userAns !== null && userAns.toLowerCase() === quiz[round][1].toLowerCase() ) {
    console.log(`got answer round #${round}`);
    correctAnswerIndices.push(round);
  }
}

// 4. Display the number of correct answers to the user

let html = ''

 html += `<h2>You got <strong>${correctAnswerIndices.length}</strong> correct answers:</h2>`
 html += '<ol>'
 for ( let i = 0; i < correctAnswerIndices.length; i++ ){
   html += `<li>${quiz[i][0]}<br><i>Answer: ${quiz[i][1]}</i></li>`;
 }
 html += '</ol>'
 
// console.log( html );

 html += `<h2>You got <strong>${quiz.length-correctAnswerIndices.length}</strong> incorrect answers:</h2>`
 html += '<ol>'
 for ( let i = 0; i < quiz.length; i++ ){
   // Check if it was not a correct answer and add:
   if ( correctAnswerIndices.indexOf(i) == -1 ) {
    html += `<li>${quiz[i][0]}<br><i>Correct answer: ${quiz[i][1]}</i></li>`;
   }
 }
 html += '</ol>'
 
// console.log( html );

 document.querySelector('main').innerHTML = html