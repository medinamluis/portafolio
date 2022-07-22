interface InvoiceFunc {
    (name : string, total: number) : void;   // The function parameters with types and the return type
}

let myInvoice : InvoiceFunc;
myInvoice = function(n, t) {
    console.log(n);
    console.log(t);
}

myInvoice('Google', 100);