var Invoice = /** @class */ (function () {
    // Initializer:
    // public needed for getter/setters
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ', ' + city + ', ' + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', 'Mountain View', 'CA');
var appleInvoice = new Invoice('Apple', 'Cupertino', 'CA');
console.log(googleInvoice.companyProfile);
console.log(appleInvoice.companyProfile);
//# sourceMappingURL=20_classes.js.map