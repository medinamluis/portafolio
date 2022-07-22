var x = 0;
while (x < 10) {
    console.log(x);
    x++;
}
var players = [1, 1, 2, 3, 5, 8, 13, 21];
// FOR IN
for (var player in players) {
    console.log(player); // result: 0, 1, 2, 3, 4, 5, 6, 7
}
// FOR OF
for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
    var player = players_1[_i];
    console.log(player); // result: 1, 1, 2, 3, 5, 8, 13, 21
}
//# sourceMappingURL=12_loops.js.map