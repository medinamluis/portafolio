function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 12;
do {
  console.log( `The ${counter}-th random number is ${getRandomNumber(10)}` );
  counter++;  // same as counter += 1;
} while ( counter < 10 );
