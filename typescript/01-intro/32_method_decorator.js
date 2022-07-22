var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Note the class decorator.
var AccountsdPayable = /** @class */ (function () {
    function AccountsdPayable() {
    }
    // Apply the method decorator:
    AccountsdPayable.prototype.deleteAccount = function () {
        console.log('Deleting account...'); // <--- 3rd to run
    };
    __decorate([
        admin // <--- 1st to run
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AccountsdPayable.prototype, "deleteAccount", null);
    AccountsdPayable = __decorate([
        detailedLog('billing') // <--- 2nd to run
        ,
        __metadata("design:paramtypes", [])
    ], AccountsdPayable);
    return AccountsdPayable;
}());
function detailedLog(dashboard) {
    if (dashboard == 'billing') {
        console.log('Working in the billing department');
        return function (target) { };
    }
    else {
        console.log('Working in some other department');
        return function (target) { };
    }
}
// A METHOD DECORATOR must return a function with the TARGET, PROPERTYKEY (string), and DESCRIPTOR (TypedPropertyDescriptor interface) parameters:
function admin(target, propertyKey, descriptor) {
    console.log("Doing admin check at this point...");
    return descriptor;
}
var post = new AccountsdPayable;
post.deleteAccount();
//# sourceMappingURL=32_method_decorator.js.map