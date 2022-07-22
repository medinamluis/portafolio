// "use strict";  

/*
Promises STAGES:
- Pending: Start mowing
- Resolve: Complete mowing process
- Reject: Did not complete mowing process
*/

let performUpload = function(imgStatus: string) : Promise<{imgStatus : string}> {
    return new Promise(
        (resolve) => {   // parameters: (resolve, [reject])
            console.log(`Status ${imgStatus}`);
            setTimeout(
                () => {
                    resolve(
                        // Return an object with the parameter of the original function as a key/value pair
                        { "imgStatus": imgStatus }
                    );
                },
                1000
            );
        }
    );
}

var upload: { imgStatus: string };
var compress: { imgStatus: string };
var transfer: { imgStatus: string };

performUpload('Uploading...')
    .then(
        // .then() takes as 1st argument a callback for the on-fulfillment case
        (res) => {
            upload = res;   // where res = {imgStatus: 'Uploading...'}
            return performUpload('Compressing...');
        },
        // .then() takes as 2nd argument a callback for the on-reject case (omitted here)
    )
    .then(
        (res) => {
            compress = res;   // where res = {imgStatus: 'Compressing...'}
            return performUpload('Transferring...');
        }
    )
    .then(
        (res) => {
            transfer = res;   // where res = {imgStatus: 'Transferring...'}
            return performUpload('Image upload completed...');
        }
    );
      
