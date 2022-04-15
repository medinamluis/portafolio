/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

function random(lower, upper) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw Error('Both arguments must be numbers');
  } else {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  }
}

// Call the function and pass it different values
console.log( random(1,1) );
console.log( random(1,2) );
console.log( random(1,6) );
console.log( random(0,6) );