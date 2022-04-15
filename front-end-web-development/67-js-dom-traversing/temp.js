function sayHi(){
	console.log("Hello")
}

sayHi();

function hiAndBye(func) {
  func();
  console.log("Bye");
}

hiAndBye(sayHi);

hiAndBye(function sayHi(){
	console.log("Hello2")
});

hiAndBye(() => {
	console.log("Hello3")
});