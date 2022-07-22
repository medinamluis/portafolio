var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Post = /** @class */ (function () {
    function Post() {
    }
    // Decorators are called at runtime, not at instantiation
    // (we'll see the console.logs of both processes even if we don't
    // instantiiate the Post class). Output:
    // 1.1 processOne is running
    // 2.2 processTwo is running
    // 2.2 processTwo is returning
    // 1.2 processOne is returning
    Post.prototype.someFunction = function () { }; // Function to decorate
    __decorate([
        processOne(),
        processTwo(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Post.prototype, "someFunction", null);
    return Post;
}());
// Two TS decorators:
function processOne() {
    console.log("1.1 processOne is running");
    // A decorator must return a function with the following parameters:
    return function (target, propertyKey, descriptor) {
        console.log("1.2 processOne is returning");
    };
}
function processTwo() {
    console.log("2.1 processTwo is running");
    // A decorator must return a function with the following parameters:
    return function (target, propertyKey, descriptor) {
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
//# sourceMappingURL=30_decorator_intro.js.map