const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

// Dot vs brackt notation

// Properties
console.log(ernie.age);
console.log(ernie['age']);
console.log(ernie['breed']);

// Methods
ernie.bark();
ernie['bark']();

var prop = 'breed';
console.log(ernie[prop]);

// Update properties
ernie.age = 2;
ernie['age'] = 2;

//New properties
ernie.color = 'black';

console.log(ernie);

const myString = "Programming with Treehouse is fun!";
//console.log( ...myString.matchAll(regexp) );

const countWords = function(string) {
  let counter = 0;
  for ( const i of string ){
    if ( i === ' ' ) {
      counter++;
    }
  }
  return counter + 1;
}

const countWords2 = function(string) {
  return string.match( /\s/g ).length + 1;
}

const countWords3 = function(string) {
  return string.split(' ' ).length + 1;
}

console.log( countWords(myString) );
console.log( countWords2(myString) );
console.log( countWords3(myString) );