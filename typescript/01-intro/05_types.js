// Boolean
var paidAccount = true;
// Number - encapsulates int, float, etc.
var age = 33;
var taxRate = 7.5;
// String
var fullName = 'My Name Here';
// Array - we need to specify the data type of the array
var ages = [33, 28, 11];
// Tuple (fixed size)
var player; // for all cases, you can first initialize only 
player = [1, 'Name']; // and then add their values
// Enum -- create stages of a workflow that can be called as methods
var ApprobalStatus;
(function (ApprobalStatus) {
    ApprobalStatus[ApprobalStatus["Approved"] = 0] = "Approved";
    ApprobalStatus[ApprobalStatus["Pending"] = 1] = "Pending";
    ApprobalStatus[ApprobalStatus["Rejected"] = 2] = "Rejected";
})(ApprobalStatus || (ApprobalStatus = {}));
;
var job = ApprobalStatus.Pending;
// Any -- when you don't know, for example, what type of data will be coming from an API
var apiData = [123, 'Jordan', false];
// Void -- for functions that do not return anything
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=05_types.js.map