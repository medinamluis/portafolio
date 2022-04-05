const answer = prompt("Which planet is closer to the Sun?")

if ( answer.toUpperCase() === "MERCURY" ) {
  console.log("Correct!");
  document.querySelector("main").innerHTML = "<h1>Correct!</h1>"
} else {
  console.log("Incorrect!");
  document.querySelector("main").innerHTML = "<h1>Incorrect!</h1>"
}