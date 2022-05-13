const order = false;

const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    if (order) {
      // Resolves the promise to 'fulfilled' if accepted:
      resolve('Your order is ready. Come and get it!');   // 
    } else {    
      // Resolves the promise to 'rejected' if not accepted:
      reject( Error('Oh no! There was a problem with your order!') );   // Best practice: pass an Error function instead of just throwing a string so that we get stack traces of the error
    }
  }, 3000);
});

console.log(breakfastPromise);    // initially at state 'pending', the default

breakfastPromise
.then( val => console.log(val) )     // .then() handles fulfilled (and rejected, optionally) promises. .then() can be invoked multiple times, each time returning a new promises
.catch( err => console.log(err) );   // .catch() handles rejected promises only. Can be omitted, but if there's an error it'll go silently

console.log(breakfastPromise);
