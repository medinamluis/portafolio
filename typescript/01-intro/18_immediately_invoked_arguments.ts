// Function declaration:

var fullName : (first : string, last : string ) => void;
fullName = function(first : string, last : string ) {
    console.log(  first + ' ' + last );
}
fullName('Amy', 'Baker');

// Immediately invoked version:

(function(first : string, last : string ) {
    console.log(first + ' ' + last);
})('Charly', 'Donovan');