var dbQuery = function() : void {
    setTimeout(
        () => console.log('Query results'),
        3000
    );
}

// Hihger order function taking another function (arrow function here) as an argument:
function loadPage(q : () => void) {
    console.log("Header");
    q();  // it's gonna run and not hold the rest of the functions (the twi following console.log instruction)
    console.log("Sidebar");
    console.log("Footer");
};

loadPage(dbQuery);