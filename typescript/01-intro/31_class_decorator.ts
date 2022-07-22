// Apply the class decorators:

@detailedLog('billing')  // console output at runtime: 'Working in the billing departmet'
class AccountPayable {
    constructor() {}
}

@detailedLog('warehouse')  // console output at runtime: 'Working in some other departmet...'
class ProductManager {
    constructor() {}
}


function detailedLog(dashboard: string) {
    if (dashboard == 'billing') {
        console.log('Working in the billing departmet');
        // A CLASS DECORATOR always must have the TARGET parameter:
        return function(target: Object) {};
    } else {
        console.log('Working in some other departmet...');
        return function(target: Object) {};
    }
    
}

