//const body = document.body;
//
//body.addEventListener('click', () => {
//  body.innerHTML = `<h1>Hello, world!</h1>`;
//});

// Return the corresponding Element object:
const btnMain = document.getElementById('btn-main');  
const headline = document.getElementById('headline');
// alternatively,
//const headline = document.querySelector('li'); // Returns Element object of the first occurance

// Return an HTMLCollection (live) of HTML Element objects:
const items = document.getElementsByTagName('li');  
const highlights = document.getElementsByClassName('highlight');
// alternatively (note the CSS-selector-like synthax),
//const highlights.document.querySelectorAll('.li'); // Returns NodeList (static) of Node objects

btnMain.addEventListener('click', () => {
   headline.style.border = 'solid 2px red';
   headline.style.fontSize = '60px';
 });

for (let i = 0; i < items.length; i++ ) {
  items[i].style.color = 'orchid';
}

for ( const highlight of highlights ) {
  highlight.style.backgroundColor = 'cornsilk';
}
