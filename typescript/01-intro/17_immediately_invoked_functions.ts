var names : string[] = ['Amy', 'Beth', 'Charly']
var counter : number = 0;

// Immediately invoked functions: Note the parenthesis around the function:
(function() {
    for (let name in names) {
        counter++;
    }
})();

console.log(counter);