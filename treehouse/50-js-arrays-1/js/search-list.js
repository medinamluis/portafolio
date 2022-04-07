const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];

const search = prompt('Search for a product.');
let message;

if ( !search ) {  // check of falsy: null (clicking Cancel in propt, or submiting empty string
  message = `<strong>In stock: ${inStock.join(', ')}</strong>.`
} else if ( inStock.includes(search.toLowerCase()) ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search.toLowerCase())+1} on the list!`
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`
}

//document.querySelector('main').innerHTML = `<p>${message}</p>`

// Alternatively, convert toLowerCase first but only if truty!

let search2 = prompt('Search for a second product.');
let message2;

if ( search2 ) {
  search2 = search2.toLowerCase();
  productIndex = inStock.indexOf(search2);
}

if ( !search2 ) {
  message2 = `<strong>In stock: ${inStock.join(', ')}</strong>.`
} else if ( productIndex !== -1 ) {
  message2 = `Yes, we have <strong>${search2}</strong>. It's #${productIndex+1} on the list!`
} else {
  message2 = `Sorry, we do not have <strong>${search2}</strong>.`
}

 let html = `<p>${message}</p>
<p>${message2}</p>
`;
 console.log( html );
 
 document.querySelector('main').innerHTML = `<p>${message}</p>
<p>${message2}</p>`
