const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

for ( let key in person ) {
  //  console.log( `${person.key` )  // does not work in dot notation. use bracket
  console.log( `${key}: ${person[key]}` );
}

console.log( Object.keys(person) );
console.log( Object.keys(person).length );
console.log( Object.values(person) );

// Spread operator also usefult to copy/combine key/value pairs from an object to another:

console.log('person', person);

const contact = {
  phone: '01234567890',
  email: 'name@example.com'
};

console.log('contact', contact);

const profile = {
  ...person,
  ...contact
}

console.log('profile', profile);

// Note the shallow copies when using spread operator:

person.skills = ['JavaScript', 'HTML', 'CSS', 'Python']
person.phone = '0000000000'

console.log('person', person);
console.log('contact', contact);
console.log('profile', profile);