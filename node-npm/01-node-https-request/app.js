/* Write your code below */
//console.log("Hello World")

// Include a module defined in another file
const https = require('https');
const http = require('http');

// Auxiliary functions

function printMessage(username, badgeCount, points) {
  const message = `${username}: ${badgeCount} total badge(s) and ${points} points in JS`;
  console.log(message);
}

function printError(error) {
  console.error(error.message);
}

// MAIN:

function getProfile(username) {
  
  try {  // watch for invalid URL (syncrhonous error, see below)
    
    // 1. Connect to the API URL https://teamtreehouse.com/csalgado.json
    const request = https.get(
      
      `https://teamtreehouse.com/profiles/${username}.json`,
    //`https://validbutinexistenturl.com/profiles/${username}.json`,   // to test ASYNCHRONOUS error handling: valid but non-existent URL -> use request.on
    //`://teamtreehouse.com/profiles/${username}.json`,                // to test  SYNCHRONOUS error handling: invalid URL (e.g. typo in protocol) -> can use try-catch
      
      (res) => {
        
        // watch for HTTP status code and only proceeed when code is 200 OK
        if (res.statusCode == 200) {
        
          //console.dir(res);            // print the properties of an object (full JSON response)
          // console.dir(res.statusCode);   // only the status (200 for OK)
          
          // 2. Read the data
          // '.on' is the event handler in node.js, applied on the request response object. The 'data' event is when data is received. Received data is in binary format and comes in pieces ('buffers') -> we declare a variable and concatenate each buffer until the 'stream' is complete
          let body = '';
          res.on('data',
            data => {
              // console.dir(data)
              body += data.toString();  // binary -> string
            }
          );
          
          // 3. Parse the data
          // '.in' event: when all data has been received
          res.on('end',
            () => {
              try {  // watch for non-existent username
                 
                // console.dir(body)
                // console.dir(JSON.parse(body))
                let profile = JSON.parse(body)
            
                // 4. Print the data
                printMessage(username, profile.badges.length, profile.points.JavaScript);
          
              } catch (error) {
                // console.error(`${username}: ${error.message}`);
                printError(error);
              }
            }
          );
        
        } else {
          const message = `There was an error getting the profile for ${username} (${res.statusCode}: ${http.STATUS_CODES[res.statusCode]})`;
          const statusCodeError = new Error(message);
          printError(statusCodeError);
        }
      }
    );
  
    // watch for non-existent URL (asynchronous error)
    request.on('error',
      error => {
        //console.error(error)
        // console.error(error.code);   // type of error
        //console.error('The request address was not found');   // custom message
        printError(error);
      }
    );
  
  } catch (error) {
    // console.error(error.message);  // string description
    printError(error);
  }
}

// getProfile('medinamluis');

// 'process': object with info about the current Node.js process
// Any strings passed after typing 'node app.js' in the console, will get passed to the 'argv' property of 'process', a list of strings where the first and second elements are the paths to node.js and app.js, respectively
// console.dir(process);

const users = process.argv.slice(2);  // we don't need the first 2 elements (extract sublist from index 2 onwards)

users.forEach(getProfile);

