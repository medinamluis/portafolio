let userNumLow;
let userNumHigh;
let result;

// Collect input from a user
userNumLow = prompt("Provide lowest number");
userNumHigh = prompt("Provide highest number");

// Convert the input to a number
userNumLow = parseInt(userNumLow);
userNumHigh = parseInt(userNumHigh);

// NaN (possible result from parseInt when not a number) is considered false.
// Alternatively test with isNaN
if ( userNumLow >==0 && userNumHigh) {  
  
  // Use Math.random() and the user's number to generate a random number
  // Inclusive of the minimum (0) and maximum (userNum)
  result = Math.floor( Math.random() * (userNumHigh - userNumLow + 1 ) + userNumLow )
  
  // Create a message displaying the random number
  console.log(`A random number between ${userNumLow} and ${userNumHigh}: ${result}`)
}
s