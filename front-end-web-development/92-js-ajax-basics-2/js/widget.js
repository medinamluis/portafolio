var xhrInOffice = new XMLHttpRequest();
xhrInOffice.onreadystatechange = function () {
  if(xhrInOffice.readyState === 4 && xhrInOffice.status === 200) {
    var employees = JSON.parse(xhrInOffice.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhrInOffice.open('GET', '../data/employees.json');
xhrInOffice.send();


var xhrRoomAvailable = new XMLHttpRequest();
xhrRoomAvailable.onreadystatechange = function () {
  if (xhrRoomAvailable.readyState === 4 && xhrRoomAvailable.status === 200) {
    let rooms = JSON.parse(xhrRoomAvailable.responseText);
    let statusHTML = `<ul class="rooms">`
    let roomAvailable = "";
    for (let room of rooms) {
      console.log(room);
      if (room.available) {
        roomAvailable = 'empty';
      } else {
        roomAvailable = 'full';
      };
      statusHTML += `<li class="${roomAvailable}">${room.room}</li>`
    }
    statusHTML += '</ul>'
    document.getElementById('roomList').innerHTML = statusHTML;
  };
};
xhrRoomAvailable.open('GET', '../data/rooms.json');
xhrRoomAvailable.send();