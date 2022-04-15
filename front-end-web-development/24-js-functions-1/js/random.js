function getRandom(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

//alert( getRandom() );
//console.log( getRandom() );
//const dieRoll = getRandom();
//console.log( dieRoll );

console.log( getRandom(6) );
console.log( getRandom(100) );
console.log( getRandom(1000) );
console.log( getRandom(20) );