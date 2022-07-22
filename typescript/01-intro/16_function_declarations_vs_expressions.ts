// Function Declaration
console.log( fullName('Amy', 'Barker I') );  // Functions declarations are hoisted -> can be called before defined
function fullName(first : string, last : string) : string {
    return first + ' ' + last;
}
console.log( fullName('Amy', 'Barker II') );

// Function Expression:
var otherFullName : (first : string, last : string) => string;
otherFullName = function (first : string, last : string) {
    return first + ' ' + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
    return first + ' ' + last;
}

console.log( otherFullName('Amy', 'Barker III') );   // Function expressions are not hoisted, cannot be called before defined
console.log( thirdFullName('Amy', 'Barker IV') );


var yetAnotherFullName : (first : string, last : string) => string;

// var arrow1                                  = (a,         b)                => {};
// var arrow2                                  = (a: string, b: string)        => {};
// var arrow3                                  = (a: string, b: string) : void => {};
// var arrow4 : (a: string, b: string) => void;                                                 arrow4 = function(a: string, b: string) : void {};
// var arrow5 : (a: string, b: string) => void = (a: string, b: string) : void => {};
