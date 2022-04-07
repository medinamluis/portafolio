const secretWord = 'tomato';
let message = 'Access denied :(';

for ( let i = 5; i >= 1; i-- ) {
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world!';
    break;
  }
}

alert(message);

const tMinus = 10;
let message2 = 'Liftoff! 🚀';

for ( let i = tMinus; i >= 1; i-- ) { 
  let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
  //  cancel if typing n or N, or if clicking Cancel button (returns null) in prompt
  if ( status === null || status.toLowerCase() === 'n' ) {
    message2 = 'Abort launch!';
    break;
  }
}

alert(message2);