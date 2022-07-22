// Boolean
let paidAccount : boolean = true;

// Number - encapsulates int, float, etc.
let age : number = 33;
let taxRate : number = 7.5;

// String
var fullName : string = 'My Name Here';

// Array - we need to specify the data type of the array
var ages : number[] = [33, 28, 11];

// Tuple (fixed size)
let player : [number, string];  // for all cases, you can first initialize only 
player = [1, 'Name'];           // and then add their values

// Enum -- create stages of a workflow that can be called as methods
enum ApprobalStatus {Approved, Pending, Rejected};
let job : ApprobalStatus = ApprobalStatus.Pending;

// Any -- when you don't know, for example, what type of data will be coming from an API
var apiData : any[] = [123, 'Jordan', false];

// Void -- for functions that do not return anything
function printOut(msg: string) : void {
    console.log(msg);
}