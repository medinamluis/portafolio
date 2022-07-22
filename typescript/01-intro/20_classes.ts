class Invoice {
    companyProfile : string;
    
    // Initializer:
    // public needed for getter/setters
    constructor(public name: string, public city: string, public state: string) {
        this.companyProfile = name + ', ' + city + ', ' + state;
    }
}

var googleInvoice = new Invoice('Google', 'Mountain View', 'CA');
var appleInvoice = new Invoice('Apple', 'Cupertino', 'CA');
console.log(googleInvoice.companyProfile);
console.log(appleInvoice.companyProfile);
