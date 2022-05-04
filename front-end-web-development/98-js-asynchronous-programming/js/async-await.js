const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests

async function getJSON(url) {   // using try...catch is the most common way of handling exceptions using async/await
  try{
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

async function getPeopleInSpace(url) {  // an async function always returns a Promise
  // const peopleResponse = await fetch(url);   // 'await' is only valid inside async functions // Original
  // We can shoul also add .catch() to handle exceptions in an await promise (see also below):
  // const peopleResponse = await fetch(url).catch( e => console.log('Error fetching astros data: ' + e) ); // Original + error handling
  // Another way is to handle all exceptions with a try...catch (see the asynchronous function above):
  const peopleJSON = await getJSON(url);   // w/error handling with try...catch
  
  // const peopleJSON = await peopleResponse.json(); // not needed if using the last option above (w/error handling with try...catch)
  
  const profiles = peopleJSON.people.map( async (person) => { 
    const craft = person.craft;
    // Error handling similar as above:
    // const profileResponse = await fetch(wikiUrl + person.name)   // Original
    // const profileResponse = await fetch(wikiUrl + person.name).catch( e => console.log('Error fetching wiki data: ' + e) );   // Original + error handling
    const profileJSON = await getJSON(wikiUrl + person.name)    // w/error handling with try...catch
  
    // const profileJSON = await profileResponse.json();  // not needed if using the last option above (w/error handling with try...catch)
  
    return { ...profileJSON, craft }
  });

return Promise.all(profiles);
};

// Generate the markup for each profile
function generateHTML(data) {
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    // Check if request returns a 'standard' page from Wiki
    if (person.type === 'standard') {
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

// Async/await is not meant to replace promises, it's synthatic sugar for creating funcitons that return and wait for promises. This...
/*
btn.addEventListener('click', async (event) => {
  event.target.textContent = "Loading...";
  try {
    const astros = await getPeopleInSpace(astrosUrl);
    generateHTML(astros);
  } catch(e) {
    peopleList.innerHTML = '<h3>Something went wrong</h3>';
    console.err(err)   // for errors, use console.err instead of console.log. Any exceptions will bubble up and be catched here
  } finally {
    event.target.remove();
  }
});
*/

// ... is the same than this (perhaps more readable):
btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";
   getPeopleInSpace(astrosUrl)
    .then(generateHTML)
    .catch( e => {
      peopleList.innerHTML = '<h3>Something went wrong</h3>';
      console.err(err)   // for errors, use console.err instead of console.log. Any exceptions will bubble up and be catched here
    })
    .finally( () => event.target.remove() );
});

// Therefore, we can combine them