class Invoice {
    total: number;

    constructor(total: number) {
        this.total = total;
    }

    printTotal() {
        console.log(this.total);  // refers to the the class' 'total' attribute
    }

    printLater(time: number) {  // time in [ms]
        setTimeout(
            // 1st argument: the function to run
            function() {  // no arguments in this case
                // We cannot do this directly:
                console.log(this.total)  // --> undefined
                // the problem arises from the behaviour of 'this' inside another function.
                // Here, 'this' refers to the properties of 'function()', which are none
                // -- i.e. there is no 'total' attribute for 'function()'.
            },
            // 2nd argument: the delay time before runnning:
            time
        )
    }

    printLaterFixedWithArrowFunctions(time: number) {
        setTimeout(
            // here the 'this' total refers back again to the class
            () => console.log(this.total),
            time
        )
    }

}

var invoice = new Invoice(400);
invoice.printTotal();
invoice.printLater(1000);  // output: undefined, since there is no this.total attribute for the function declaration inside the 'printLater'
invoice.printLaterFixedWithArrowFunctions(2000);  // output: 400, since the 'printLaterFixedWithArrowFunctions' uses invoice(i.e. this).total for its inner arrow function