
// Callback function:
/*
function sayHello() {
    console.log('Hello');
}

const function () {
  console.log('Hello');
}

function executeCallback(callback) {
  callback();
}

executeCallback(sayHello);
*/

// or writing the function in-line as an anonymous function:
/*
function executeCallback(callback) {
  callback();
}

executeCallback(function () {
  console.log('Hello');
});
*/

// or as an arrow function (curly braces can be removed when the function is one single line):

function executeCallback(callback) {
  callback();
}

executeCallback(() => console.log('Hello'));