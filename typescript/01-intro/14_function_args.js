// Second parameter is optional (note the '?') -> always come after mandatory parameters
// Third parameter has a default -> may or may not come after optiional parameters
// Note: Mandatory parameters CANNOT come after optional parameters
function printAddress(street, streetTwo, state) {
    if (state === void 0) { state = 'AZ'; }
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
    console.log(state);
}
printAddress('123 Private Lane', 'Appt. 456');
console.log('\n');
printAddress('78 Old Road');
console.log('\n');
printAddress('123 Private Lane', 'Appt. 456', 'OR');
console.log('\n');
// REST argument: '...' (aka 'splatt' in some languages)
function lineuoCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log(team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineuoCard('Local Team F.C.', 'Andy', 'Bob', 'Charly');
//# sourceMappingURL=14_function_args.js.map