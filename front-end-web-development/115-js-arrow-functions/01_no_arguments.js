const name = "Andrew";

// NO ARGUMENTS:

// Function declarations:
/*
function sayName() {
    const message = "My name is " + name;
    console.log(message);
}

function sayBye() {
  console.log("Bye " + name);  
}
*/

// Function expressions:
/*
const sayName = function() {
    const message = "My name is " + name;
    console.log(message);
};

const sayBye = function() {
  console.log("Bye " + name);  
};
*/

// Arrow functions (we can omit the 'return{}' when there's a single-line return):

const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}

const sayBye = () => console.log("Bye " + name);
}