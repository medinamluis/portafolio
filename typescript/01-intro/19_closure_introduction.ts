// functions have access to any public variables in the outer scope:

function nameFunction(name: string) : void {
    var n : string = name;  // in the outer scope

    function printName() {
        // n is available inside here
        console.log(n);
    }

    printName();
}

nameFunction('Emma');


// Inner functions maintain access to the outer scope even AFTER the values are returned!!!

function nameFunction2(name: string) {
    var m : string = name;   // <--- this variable-value is a closure: it is encapsulated and will be accesible to function() even after that function has already been returned

    return function() {
        console.log(m);
    }
}

var nameAgain = nameFunction2('Fabiola');  // <--- 'nameFunction2' has returned what it had to return (a function()) 
nameAgain();  // <--- we are technically calling the function() already returned by 'nameFunction2', and yet, it still has access to the original 'm' variable to which 'Fabiola' was assigned


// Another example:

function lineup() {
    var nowBatting : number = 1;
    
    // Will return a JS object with methods:
    return {
        nextBatter() { nowBatting++ },   // we have access to the nowBatting variable in the outer scope which also is a closure
        currentBatter() { return nowBatting },
    }
}


let batters = lineup();  // upon creation, its nowBatting state is 1
console.log( batters.currentBatter() );  // 1

batters.nextBatter();   // it maintains knowlede of its nowBatting state, so 1 -> 2
console.log( batters.currentBatter() );  // 2

batters.nextBatter();   // nowBatting = 2 -> 3
batters.nextBatter();   // nowBatting = 3 -> 4
console.log( batters.currentBatter() );  // 4

// ... so, kinda like classes, as they encapsulate data, and if fact where invented in JS
// when it did not have the concept of classes (object oriented) yet...


let pitchers = lineup();   // independent object from batters
console.log( pitchers.currentBatter() );  // 1

pitchers.nextBatter();
console.log( pitchers.currentBatter() );  // 2
console.log( batters.currentBatter() );   // 4