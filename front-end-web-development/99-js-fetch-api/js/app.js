const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function fetchData(url) {   // a generic reusable wrapper around fetch
  return fetch(url)
          //.then(res => console.log(res))
          .then(checkStatus)
          .then(res => res.json())
          .catch(error => console.log('Looks like there was a problem!', error));
};

Promise.all([
  fetchData('https://dog.ceo/api/breeds/list'),
  fetchData('https://dog.ceo/api/breeds/image/random')
])
  //.then(data => console.log(data));
  .then(data => {
    const breedList = data[0].message;
    const randomImage = data[1].message;
    
    generateOptions(breedList);
    generateImage(randomImage);
  });

// The Promise.all handles both of the following equivalent promises at the same time:
/*
fetchData('https://dog.ceo/api/breeds/list')
  .then(data => generateOptions(data.message));

fetchData('https://dog.ceo/api/breeds/image/random')
  .then(data => generateImage(data.message));
*/

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

function generateOptions(data) {
  const options = data.map(item => `
    <option value='${item}'>${item}</option>
  `).join('');   // use join to remove the ', ' inserted by map
  select.innerHTML = options;
};

function generateImage(data) {
  const html = `
    <img src=${data} alt>
      <p>Click to view images of ${select.value}s</p>
    `;
  card.innerHTML = html;
  //card.querySelector('img').style.height = "100px";
};

function fetchBreedImage() {
  const breed = select.value;
  const img = card.querySelector('img');
  const p = card.querySelector('p');
  
  fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
  .then(data => {
    img.src = data.message;
    img.alt = breed;
    p.textContent = `Click to view images of ${breed}s`
  });
};

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// Change image to selected breed option in menu:
select.addEventListener('change', fetchBreedImage);

// Change to random image of current breed when click anywhere on the card div:
card.addEventListener('click', fetchBreedImage);

//// Submit form data
form.addEventListener('submit', postData);

// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  
  // Use the second optional parameter (a configuration object) is fetch to POST instead of GET (default)
  const config = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},  // tells the served that data is incoded in json
    body: JSON.stringify({ name: name, comment: comment })  // data to be sent. convert to json string. This can me rewritten simply as: JSON.stringify({ name, comment }), when key and value are the same
  }
  
  fetch('https://jsonplaceholder.typicode.com/comments', config)
    .then(checkStatus)
    .then(res => res.json())
    .then(data => console.log(data));
};
