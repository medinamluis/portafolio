// Function Declaration
console.log(fullName('Amy', 'Barker I')); // Functions declarations are hoisted -> can be called before defined
function fullName(first, last) {
    return first + ' ' + last;
}
console.log(fullName('Amy', 'Barker II'));
// Function Expression:
var otherFullName;
otherFullName = function (first, last) {
    return first + ' ' + last;
};
var thirdFullName = function (first, last) {
    return first + ' ' + last;
};
console.log(otherFullName('Amy', 'Barker III')); // Function expressions are not hoisted, cannot be called before defined
console.log(thirdFullName('Amy', 'Barker IV'));
var yetAnotherFullName;
// var arrow1                                  = (a,         b)                => {};
// var arrow2                                  = (a: string, b: string)        => {};
// var arrow3                                  = (a: string, b: string) : void => {};
// var arrow4 : (a: string, b: string) => void;                                                 arrow4 = function(a: string, b: string) : void {};
// var arrow5 : (a: string, b: string) => void = (a: string, b: string) : void => {};
//# sourceMappingURL=16_function_declarations_vs_expressions.js.map