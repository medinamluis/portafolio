class Report {
    companyProfile : string;   // public by default (no need to add it)

    constructor(public name : string) {
        this.companyProfile = name;
    }
}

// 

class Invoice extends Report {
    constructor(public name : string, public total : number) {
        super(name);
    }

    printInvoice() { // public by default (no need to add it)
        return this.name + ', ' + this.total;
    }   
}

var invoice1 = new Invoice('Google', 200);
console.log(invoice1.companyProfile);
console.log(invoice1.printInvoice());

//

class Bill extends Report {
    constructor(public name: string, public city: string, public state : string) {
        super(name);
    }

    printBill() {
        return this.name + ', ' + this.city + ', ' + this.state;
    }
}

var bill1 = new Bill('Google', 'Mountain View', 'CA');
console.log(bill1.printBill());