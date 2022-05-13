const main = document.querySelector('main');
let html = ' ';

// Using 'for...of'. Alternative, use 'for' with indices and let pet = pets[i]
for (const pet of pets) {
  html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
`;
}

console.log(html);

//document.querySelector('main').innerHTML = html;
main.insertAdjacentHTML('beforeend', html);