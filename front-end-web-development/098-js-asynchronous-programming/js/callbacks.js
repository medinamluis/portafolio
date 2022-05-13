const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Make an AJAX request
function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if(xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      console.log("0", data);
      return callback(data);  // using 'return callback(data);' instead of 'callback(data);' to short-circuit the function, and prevent multiple callbacks from being accidentally invoked
    }
  };
  xhr.send();
}

//
function getProfiles(json) {
    json.people.map( person => {
        console.log(person);
        getJSON(wikiUrl + person.name, generateHTML);
    });

};

// Generate the markup for each profile
function generateHTML(data) {
  const section = document.createElement('section');
  peopleList.appendChild(section);
  // Check if request returns a 'standard' page from Wiki
//  if (data.type === 'standard') {
    section.innerHTML = `
      <img src=${data.thumbnail.source}>
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <p>${data.extract}</p>
    `;
//  } else {
//    section.innerHTML = `
//      <img src="img/profile.jpg" alt="ocean clouds seen from space">
//      <h2>${data.title}</h2>
//      <p>Results unavailable for ${data.title}</p>
//      ${data.extract_html}
//    `;
//  }
}

// Click on button:

// To avoid this nesting callbacks...
/*
btn.addEventListener('click', (event) => {
  // Retrive lists or astronauts:
  getJSON(astrosUrl, (json) => {
    // Retrieve wikipedia page for each astronaut and build HTML section for each:
    console.log("1", json);
    json.people.map( person => {
        console.log(person);
        getJSON(wikiUrl + person.name, generateHTML);
    });
  });
  event.target.remove(); // Remove button once clicked
});
*/

//... we define and use the new getProfiles function:
btn.addEventListener('click', (event) => {
  // Retrive lists or astronauts:
  getJSON(astrosUrl, getProfiles);
  event.target.remove(); // Remove button once clicked
});