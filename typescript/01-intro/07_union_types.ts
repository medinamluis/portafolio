// Declare multiple potential types with pipes '|':
type PlayerArray = Array<string|number>;

let players : PlayerArray = ['Andy', 'Bob', 'Charlotte'];
console.log(players);

let player_numbers : PlayerArray = [25, 3, 18];  // OK too
console.log(player_numbers);


var names : string[]|string;

names = ['Jordan', 'Tifanny']
console.log(names);

names = 'Kristine';
console.log(names);