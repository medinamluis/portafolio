// "use strict";  
var myVar1 = 1;
var myVar2 = 2;
/*
Promises STAGES:
- Pending: Start mowing
- Resolve: Complete mowing process
- Reject: Did not complete mowing process
*/
// FLOW:
// 1. s
let performUpload = function (imgStatus) {
    return new Promise((resolve) => {
        console.log(`Status ${imgStatus}`);
        setTimeout(() => {
            resolve(
            // Return an object with the parameter of the original function as a key/value pair
            { "imgStatus": imgStatus });
        }, 1000);
    });
};
// 2. 
var upload; // --> upload = undefined
var compress; // --> upload = undefined
var transfer; // --> upload = undefined
// 2. 
performUpload('Uploading...') // --> at this point, only exists the performUpload(imgStatus) function
    // 3. 
    .then(
// .then() takes as 1st argument a callback for the on-fulfillment case
(res) => {
    upload = res; // where res = {imgStatus: 'Uploading...'}
    return performUpload('Compressing...');
})
    .then((res) => {
    compress = res; // where res = {imgStatus: 'Compressing...'}
    return performUpload('Transferring...');
})
    .then((res) => {
    transfer = res; // where res = {imgStatus: 'Transferring...'}
    return performUpload('Image upload completed...');
});
//# sourceMappingURL=29_promises.js.map