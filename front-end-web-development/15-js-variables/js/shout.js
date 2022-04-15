const stringToShout = prompt("What to shout?");
const shout = stringToShout.toUpperCase();
const shoutMessage = `<h2>Message to shout is: ${shout}!</h2>`;

//console.log(shoutMessage);
document.querySelector('main').innerHTML = shoutMessage;