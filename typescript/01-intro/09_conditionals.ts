// let password : string = 'abc123';
let password : string = 'ABC123';
// let password : string = 'xyz456';

if (password == 'abc123') {
    console.log('Yes, this is the correct password');
} else if(password == 'ABC123') {
    console.log('Password is case-sensitive. Re-check.');
} else {
    console.log('Sorry, permission denied');
}