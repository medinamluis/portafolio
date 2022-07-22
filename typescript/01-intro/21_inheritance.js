var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Report = /** @class */ (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
// 
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(name, total) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.total = total;
        return _this;
    }
    Invoice.prototype.printInvoice = function () {
        return this.name + ', ' + this.total;
    };
    return Invoice;
}(Report));
var invoice1 = new Invoice('Google', 200);
console.log(invoice1.companyProfile);
console.log(invoice1.printInvoice());
//
var Bill = /** @class */ (function (_super) {
    __extends(Bill, _super);
    function Bill(name, city, state) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.city = city;
        _this.state = state;
        return _this;
    }
    Bill.prototype.printBill = function () {
        return this.name + ', ' + this.city + ', ' + this.state;
    };
    return Bill;
}(Report));
var bill1 = new Bill('Google', 'Mountain View', 'CA');
console.log(bill1.printBill());
//# sourceMappingURL=21_inheritance.js.map