// 1. Declare variables and capture input.
const word1 = prompt("Write a random word:");
const word2 = prompt("Write another random word:");
const word3 = prompt("Write yet another random word:");

// 2. Combine the input with other words to create a story.
const story = `Once upon a time, there was a ${word1},
living happily in the lushy forest.
One day, a ${word2} arrived and knocked
the door. He gave ${word1} a ${word3} as
a gift and left without saying a single word...`

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = `<p>${story}</p>`