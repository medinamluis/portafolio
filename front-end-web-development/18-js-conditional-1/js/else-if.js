const weather = ''

if ( weather === "sun" ) {
  document.querySelector("main").innerHTML = "<h1>Sunny. Swimming.</h1>"
} else if (  weather === "rain"  ) {
  document.querySelector("main").innerHTML = "<h1>Rain. Read.</h1>"
} else if (  weather === "snow"  ) {
  document.querySelector("main").innerHTML = "<h1>Snow. Sledding.</h1>"
} else {
  document.querySelector("main").innerHTML = "<h1>Don't know.</h1>"
}