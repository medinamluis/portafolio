var fullName = 'Name LastName';
var paidAccount = true;
var versionNumber = 1.3;
console.log(fullName);
console.log(paidAccount);
console.log(versionNumber);
// Reset:
fullName = 'Another L. Name';
paidAccount = false;
// versionNumber = 4.5; -> Not allowed
function printNameVar(f, l) {
    var greeting = 'Hi there, ';
    console.log(greeting + f + ' ' + l);
    var greeting = 'Hello there, '; // OK to redefine var, but if we declare as let throws an error: not allowed to redefine let variables
    console.log(greeting + f + ' ' + l);
    // var greeting : number = 123;  ->  However, we cannot redefine var with another data type
}
function printNameLet(f, l) {
    var greeting = 'Hi there, '; // Change to let works the same.
    console.log(greeting + f + ' ' + l);
    // let greeting : string = 'Hi there, '; -> Error: redefining let variables (block-scoped) is not posssible
    greeting = 'Hello there, '; // reassign is OK
    console.log(greeting + f + ' ' + l);
    // greeting = 123;  --> Must be same data type
}
printNameVar('Joe', 'Doe');
printNameLet('Joanne', 'Doe');
// 1. Add '03_variables.ts' to 'files' in 'tsconfig.json'
// 2. COMPILE with 'tsc' -> will create .js and .map
// 3. RUN with 'node 03_variables'
//# sourceMappingURL=03_variables.js.map