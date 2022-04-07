const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight',
  'Cool Song'
];

function createListItems(arr) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i] }</li>`;
  }
  return items;
}

//console.log( createListItems(playlist) );

document.querySelector('main').innerHTML = `
  <ol>
    ${ createListItems(playlist) }
  </ol>
`;

// Some array methods:

console.log( playlist );

// .join:

console.log( playlist.join() );  // ',' default joining string
console.log( playlist.join('') );
console.log( playlist.join(', ') );

// .includes:

console.log( playlist.includes('At Last') );
console.log( playlist.includes('Not in list') );  // false when item not in array

// .indexOf:

console.log( playlist.indexOf('At Last') );
console.log( playlist.indexOf('Not in list') );  // -1 when item not in array

// .sort:

console.log( playlist.sort() );  // elements converted into strings and sorted according to Unicode code (careful with non-ASCII characters, use .localeCompare)

const numbers = [1, 10, 4, 200, 250, 4678];  
console.log( numbers.sort() );  // notice it is not sorted bt value

// .sort can also take a function as paramter. Useful to compare numbers:

numbers.sort( function(a, b) {
  return a - b;
});
console.log(numbers);  // sorted by value

// the same with arrow function:

numbers.sort( (a, b) => a - b );
console.log(numbers);  // sorted by value

// .isArray:

console.log( Array.isArray(playlist) );
console.log( Array.isArray(1) );

// .concat:

console.log( playlist.concat(numbers) );
console.log( playlist.concat(numbers, [true, false]) );

// .splice:

console.log( playlist.splice(1, 0, 'New 2nd Song') );  // returns the removed elements
console.log( playlist );  // the edited array

console.log( playlist.splice(3, 4, 'New 4th Song', 'New 5th Song') ); // 4 songs removed from index 3 onwards, and the two new songs are added in their place (starting at index 3)
console.log( playlist );

console.log( playlist.splice(2, 4) );  // Remove from index 2 to 4, do not add anything
console.log( playlist );

console.log( playlist.splice(0) );  // Remove from index 0 onwards
console.log( playlist );

// .slice:

console.log( numbers );

console.log( numbers.slice(2, 4) );  // returns the shallow slice
console.log( numbers );

console.log( numbers.slice(3) );  // returns the shallow slice
console.log( numbers );

console.log( numbers.slice(6) );  // empty array if index is larger than array's length
console.log( numbers );

console.log( numbers.slice(-3) );  // returns the shallow slice
console.log( numbers );
