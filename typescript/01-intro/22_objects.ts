var realUser = {
    email: 'name@domain.com',
    firstName: 'Abel',
    lastName: 'Burton',
    sayHi() {   // no need to add the function keyword
        return 'Hi there!';
    }
};

console.log(realUser.email);
console.log(realUser.sayHi());

