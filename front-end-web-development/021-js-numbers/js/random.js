//console.log( Math.random() );  // random number in [0,1)

const dieRoll = Math.floor( Math.random() * 6) + 1;  // +1 to include the top margin, and never get zero
console.log(`You rolled a ${dieRoll}.`);