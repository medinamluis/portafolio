// Second parameter is optional (note the '?') -> always come after mandatory parameters
// Third parameter has a default -> may or may not come after optiional parameters
// Note: Mandatory parameters CANNOT come after optional parameters
function printAddress(street: string, streetTwo?: string, state = 'AZ') {
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
    console.log(state);
}

printAddress('123 Private Lane', 'Appt. 456')
console.log('\n');
printAddress('78 Old Road')
console.log('\n');
printAddress('123 Private Lane', 'Appt. 456', 'OR')
console.log('\n');

// REST argument: '...' (aka 'splatt' in some languages)

function lineuoCard(team: string, ...players: string[]) {
    console.log(team);
    for (let player of players) {
        console.log(player);
    }
}

lineuoCard('Local Team F.C.', 'Andy', 'Bob', 'Charly')