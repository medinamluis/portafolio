const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getProfiles(json) {
  const profiles = json.people.map( person => {
    const craft = person.craft;  // NEW
    return fetch(wikiUrl + person.name)  // we replace getJSON with fetch (see below)
            .then( response => response.json() )
            .then( profile => {
              return { ...profile, craft }   // combining the data from the 2 APIs (astronaut + craft) into one object
            })
            .catch( err => console.log('Error Fetching Wiki: ', err) );
  }); 
  return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {   
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    // Check if request returns a 'standard' page from Wiki
    if (person.type === 'standard') {  // NEW person.craft
      section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <span>${person.craft}</span>
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
  event.target.textContent = "Loading...";
  
  // fetch(). basically contains all the functionality of our getJSON(), so we remove it entirely.
  // It returns a Promise object and once request is done and data finishes loading, the fetch promise if fulfilled.
  // Once the promise is resolved, it also returns a Respose object with the status info that needs first to be parsed:
  fetch(astrosUrl)
    .then( response => response.json() )
    .then(getProfiles)
    .then(generateHTML)
    .catch( err => {
      peopleList.innerHTML = '<h3>Something went wrong</h3>';
      console.log(err)
    })
    .finally( () => event.target.remove() );
});