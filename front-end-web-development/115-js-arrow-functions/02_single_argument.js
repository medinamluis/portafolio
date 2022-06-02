// 1 ARGUMENT:

// Function declarations:
/*
function square(x) {
    return x * x;
}

function cube(x) {
    return square(x) * x;
}
*/

// Function expressions:
/*
const square = function(x) {
    return x * x;
};

const cube = function(x) {
    return square(x) * x;
};
*/

// Arrow functions (we can omit the '()' when there's a single parameter):

const square = x => x * x;

const cube = x => square(x) * x;
