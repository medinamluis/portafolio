let x : number = 100;
// let x : number = 200;

console.log('Test number: ' + x);

if (x == 100) {  // double-equal checks equality of values (JS will convert data types if necessary)
    console.log('Condition "== 100" passed');
}

if (x === 100) {  // tripe-equal checks equality of values AND data types
    console.log('Condition "=== 100" passed');
}

// In JS (no types), it"s possible to do this test, but not in TS
// if (x === '100') {
//     console.log('Condition "===" passed');
// }

if (x != 200) {
    console.log('Condition "!= 200" passed');
}

if (x >= 100) {
    console.log('Condition ">= 100" passed');
}