// 1: Select the element with the ID 'about'. 
//    Store the element in the variable `about`.
const about = document.querySelector('#about');  // equiv. to getElementById('about')
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color.
const h2All = document.querySelectorAll('h2');  // equiv. to getElementsByTagName('h2');
for ( const h2 of h2All) {
  h2.style.color = "tomato";
}

// 3: Select all elements with the class '.card'. 
//    Set their background color to the color of your choice.
const cardAll = document.querySelectorAll('.card');  // equiv. to  getElementsByClassName('card');
for ( const card of cardAll) {
  card.style.backgroundColor = "tomato";
}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
const ul = document.querySelector('ul');

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.
const container = document.querySelectorAll('.container')[1];  // equiv. to getElementsByClassName('container')[1]
container.style.backgroundColor = "royalblue";

// 6: Select all <a> elements that have a 'title' attribute. 
//    Set their color value to the color of your choice.
const aTitleAll = document.querySelectorAll('a[title]');
for ( const aTitle of aTitleAll) {
  aTitle.style.color = "tomato";
}

