// Create interface that defines an object structure:
interface User {
    email : string;
    firstName : string;
    lastName? : string;  // '?' makes the parameter optional
}

// Use the declared interface as a data type:
function profile(user: User) : string {
    return `Welcome, ${user.firstName} ${user.lastName}!`;
}

var realUser = {
    // Missing a parameter here will any use of realUser where it is expected to have all the parameters declared in the User interface
    email: 'name@domain.com',
    firstName: 'Charles',
    lastName: 'Donovan'
}

// 'profile' is going to check that 'realUser' follows the 'User' interface'
console.log(profile(realUser));
console.log(realUser.email);

// Missing lastName:
var realUser2 = {
    email: 'name@domain.com',
    firstName: 'Emma',
    // missing 
}

// still works because lastName is optional:
console.log(profile(realUser2));  // it will print 'undefined' for 'lastName', but it still works