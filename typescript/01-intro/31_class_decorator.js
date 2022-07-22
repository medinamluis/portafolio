var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AccountPayable = /** @class */ (function () {
    function AccountPayable() {
    }
    AccountPayable = __decorate([
        detailedLog('billing') // console output at runtime: 'Working in the billing departmet'
        ,
        __metadata("design:paramtypes", [])
    ], AccountPayable);
    return AccountPayable;
}());
var ProductManager = /** @class */ (function () {
    function ProductManager() {
    }
    ProductManager = __decorate([
        detailedLog('warehouse') // console output at runtime: 'Working in some other departmet...'
        ,
        __metadata("design:paramtypes", [])
    ], ProductManager);
    return ProductManager;
}());
function detailedLog(dashboard) {
    if (dashboard == 'billing') {
        console.log('Working in the billing departmet');
        // A CLASS DECORATOR always must have the following parameter:
        return function (target) { };
    }
    else {
        console.log('Working in some other departmet...');
        return function (target) { };
    }
}
//# sourceMappingURL=31_class_decorator.js.map