//Function accesible because function declarations are hoisted
// and therefore accseible before it's declared
console.log( getRandomNumber(10) );

function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}

// Function accesible because function expressiones are not hoisted
// and therefore not accesible at this point
console.log( getRandomNumber2(10) );

const getRandomNumber2 = function(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
};
