const clockSection = document.getElementById("clock");

function getTime() {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  const now = new Date();

  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  return `${hh}:${mm}:${ss}`;
}

function tickClock() {
  clockSection.textContent = getTime();
}


tickClock();   // 1st tick immediately at page load (it has to be done this way since setInterval(callbackFunction, delay) does not invoke the callback function immediately, but waits a 1st period of 'delay' ms before starts repeating the callback every 'delay' ms
setInterval(tickClock, 1000);   // tick every 1s threafter


// As an anonymus function (no need the 1st call to tickClock):
// this is however is not suitable for this case, as the text 'Clock Goes Here'  will show at page load (not acceptable), and only then the ticking clocking will be shown
// setInterval(function () {clockSection.textContent = getTime()}, 1000);