var names = ['Amy', 'Beth', 'Charly'];
var counter = 0;
// Immediately invoked functions: Note the parenthesis around the function:
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
//# sourceMappingURL=17_immediately_invoked_functions.js.map