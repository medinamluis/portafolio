const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// We set up getJSON to return a Promise object
function getJSON(url) {   // we remove 'callback' as a parameter as it is no longer needed anymore
  return new Promise( (resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if(xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        // Instead of: return callback(data);
        // we 'resolve' it, and add a reject in the 'else'
        resolve(data);
      } else {
        reject( Error(xhr.statusText) );
      }
    };
    xhr.onerror = () => reject( Error('A network error ocurred') );  // When there's an netweor error, a status code is not provided, so it is a good idea to also reject in this case
    xhr.send();
  });
}

function getProfiles(json) {
  const profiles = json.people.map( person => {  // we now catch the result of the map operation in the variable 'const profiles'
    return getJSON(wikiUrl + person.name);  // 'generateHTML' not needed as an argument anymore, as 'callback' has been removed as parameter now that we have set up getJSON to return a promise. We also add 'return' as we are now returning promises at each iteration of map
  }); 
  // Returns an array of promises
  // return profiles;
  // Alternatively, use Promise.all(), which accepts an iterable (usually a list of promises), to wait for all promises to be resolved an return a single promise. BE CAREFUL: Promise.all() is an all-or-nothing operation: it's gonna reject (firing the final .catch()) if any of the promises passed to it fails
  return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {   
  // Now 'data' is an array, so we map for each 'person' in 'data'
  data.map( person => {   // We can also use .forEach(), although .map() creates a new array while .forEach() does notx
    const section = document.createElement('section');
    peopleList.appendChild(section);
    // Check if request returns a 'standard' page from Wiki
    if (person.type === 'standard') {
      section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
      `;
    } else {
      section.innerHTML = `
        <img src="img/profile.jpg" alt="ocean clouds seen from space">
        <h2>${person.title}</h2>
        <p>Results unavailable for ${person.title}</p>
        ${person.extract_html}
      `;
    }
  });

}

btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";    // Change the text of the button once it's clicked and promises have been made
  
  getJSON(astrosUrl)   // 'getProfiles' not needed as an argument anymore, as 'callback' has been removed as parameter now that we have set up getJSON to return a promise. Instead, we call .then() and pass the reference to 'getProfiles' there:
    .then(getProfiles)
    //.then( data => console.log(data) )
    .then(generateHTML)
    .catch( err => {
      peopleList.innerHTML = '<h3>Something went wrong</h3>';  // test it by introducing a type, for example, in the wikiUrl
      console.log(err)
    })
    .finally( () => event.target.remove() );  // Remove the button after promises are completed, regardless of if the data has been fetched and processed succesfully or not
});