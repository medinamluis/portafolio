var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // responseText is a plain text string for the browser...
    console.log(xhr.responseText);
    console.log(typeof xhr.responseText);
    // ... needs to be parsed into js code:
    var employees = JSON.parse(xhr.responseText);
    console.log(employees);
    console.log(typeof employees);
    
    var statusHTML = `<ul class="bulleted">`
    let inoffice = "";
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].inoffice) {
        inoffice = "in"
      } else {
        inoffice = "out"
      }
      statusHTML += `<li class=${inoffice}>${employees[i].name}</li>`
    }
    statusHTML += `</ul>`
    console.log(statusHTML);
    document.getElementById('employeeList').innerHTML = statusHTML;
  };
};
xhr.open('GET', 'data/employees.json');  // in real-life we would point to a script that generates the json file with the up-to-date data in the server
xhr.send();