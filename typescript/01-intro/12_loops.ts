var x : number = 0;

while (x < 10) {
    console.log(x);
    x++;
}

let players : number[] = [1, 1, 2, 3, 5, 8, 13, 21];

// FOR IN
for (let player in players) {
    console.log(player);   // result: 0, 1, 2, 3, 4, 5, 6, 7
}

// FOR OF
for (let player of players) {
    console.log(player);   // result: 1, 1, 2, 3, 5, 8, 13, 21
}