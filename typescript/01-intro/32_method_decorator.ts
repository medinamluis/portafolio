// Note the class decorator.
@detailedLog('billing')    // <--- 2nd to run
class AccountsdPayable {
    constructor() {}

    // Apply the method decorator:
    @admin  // <--- 1st to run
    deleteAccount() {
        console.log('Deleting account...');    // <--- 3rd to run
    }
}

function detailedLog(dashboard: string) {
    if(dashboard == 'billing') {
        console.log('Working in the billing department');
        return function (target: Object) {};
    } else {
        console.log('Working in some other department');
        return function (target: Object) {};
    }
}

// A METHOD DECORATOR must return a function with the TARGET, PROPERTYKEY (string), and DESCRIPTOR (TypedPropertyDescriptor interface) parameters:
function admin(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) : any {
    console.log("Doing admin check at this point...");
    return descriptor;
}


var post = new AccountsdPayable;
post.deleteAccount();