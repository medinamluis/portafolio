// Original React:
/*
const title = React.createElement(
  // 1. Type of element: it won't really create and HTML h1, but an object that describes a DOM node
  'h1',
  // 2. Object with any atttributes and values we want to give the element. Pass an empty object {} or null if not needed
  {
    id: 'main-title',
    title: 'This is a title'
  },
  // 3. Contents or children of the element: the text within the h1 tag, more elements created by React.createElement, or null. An arbitrary number of elements. 
  'My First React Element!'
);
*/

// JSX (it will need Babel in the HTML to interpret it):
// Note that attribute names in JSX use camelCase synthax (thus HTML's 'class' -> JSX 'className'). Also, comments must be of the /**/ form
const title = <h1 id="main-title" title="This is a title">My First React Element!</h1>; 

// --------------------

// Original React:
/*
const desc = React.createElement(
  'p',
  null,
  'I just learned how to create a Reace node and render it into the DOM'
);
*/

// JSX:
const desc = <p>I just learned how to create a Reace node and render it into the DOM</p>;

// --------------------

// Original React:
/*
const header = React.createElement(
  'header',
  null,
  title,
  desc
);
*/

// JSX:
const name = 'Meme';
const title2 = 'First React Element!';
const desc2 = 'I just learned how to create a Reace node and render it into the DOM';
const header = (
  <header>
    <h1 id='main-title' title='This is a title'>{ name }'s { title2 }</h1>
    <p>{ desc2 }</p>
  </header>
);  // Embedding JavaScript expressions with {} (one can do e.g. math within JSX {}s )

// --------------------

//// React 16 (legacy):
ReactDOM.render(
  // 1. Object to render
  header,
  // 2. Container HTML element, where the React application will be mounted
  document.getElementById('root')   
);

// React 18:
// Container HTML element, where the React application will be mounted
/*
const root = ReactDOM.createRoot( document.getElementById('root') );
// Object to render
root.render(header);
*/

console.log(title);