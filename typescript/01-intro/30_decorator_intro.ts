class Post {
    // Apply the decorators:
    // Decorators are called at runtime, not at instantiation
    // (we'll see the console.logs of both processes even if we don't
    // instantiiate the Post class). They follow the "decorator design
    // pattern" flow:
    // 1.1 processOne is running
    // 2.2 processTwo is running
    // 2.2 processTwo is returning
    // 1.2 processOne is returning
    @processOne()
    @processTwo()
    someFunction() {}      // Function to decorate
}

// Two TS decorators:

function processOne() {
    console.log("1.1 processOne is running");
    // A DECORATOR must return a function with the TARGET, PROPERTYKEY (string), and DESCRIPTOR (PropertyDescriptor interface) parameters:
    return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
        console.log("1.2 processOne is returning");
    };
}

function processTwo() {
    console.log("2.1 processTwo is running");
    return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
        console.log("2.2 processTwo is returning");
    };
}

// Real-world example:
/*
class RealPost {
    @admin()       <-- verify that a user has admin rights before deleting a posts
    delete() {}
}
*/
