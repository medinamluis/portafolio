let html = '';
let randomvalue;
let randomRGB;

// Loop over numbers
for ( let i = 1; i <= 10; i++ ){
  // Loop over the 3 values for RGB and create string
  randomRGB = `rgb( `;
  for ( let j = 0; j < 3; j++ ) {
    randomvalue = Math.floor(Math.random() * 256);
    randomRGB += `${randomvalue}`;
    if ( j < 2 ) { randomRGB += `, `; } else { randomRGB += ` `; }
  }
  randomRGB += `)`;
  // Create html tag
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

html = '';

document.querySelector('main').innerHTML = html;

// Another method

const randomvaluefunc = () => Math.floor(Math.random() * 256);
const randomRGBfunc = (value) => `rgb( ${value()}, ${value()}, ${value()} )`;

for ( let i = 1; i <= 10; i++ ){
  html += `<div style="background-color: ${randomRGBfunc(randomvaluefunc)}">${i}</div>`;
  console.log( randomRGB );
}

console.log( html );
document.querySelector('main').innerHTML = html;