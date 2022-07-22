let email : string = 'name@example.com';
// let email : string = 'another@example.com';

// let password : string = 'abc123';
let password : string = 'ABC123';
// let password : string = 'xyz456';

// AND and OR:
if (email == 'name@example.com' && (password == 'abc123' || password == 'ABC123')) {
    console.log('Access granted. Welcome!');
} else {
    console.log('Sorry, permission denied');
}

// NEGATON
if (!(email == 'name@example.com')) {
    console.log('Wrong email');
}