const btnUpdate = document.getElementById('btn-main');  
const btnToggle = document.querySelector('.btn-toggle');

//const inputValue = document.getElementsByTagName('input')[0];
//const inputValue = document.querySelector('input');

btnUpdate.addEventListener('click', () => {
    const input = document.querySelector('.input-main');

    const headline = document.getElementById('headline');
    headline.textContent = input.value; // vs. headline.innerHTML 
    // Note:
    // textContent gets the content of all elements (incl. <style> and <script>.
    // innerHTML returns the HTML markup (has potentially more SECURITY RISKS, as executable code can be passed)
    headline.className = 'grow'  // Note that the HTML class attribute is a keyword in JS, so there's a special name: .className. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
    
    console.log( input.type );
    input.value = '';  // clear the text field
 });

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');
  
    if ( listContainer.style.display === 'none' ) {
      listContainer.removeAttribute('style'); // here the same as listContainer.style.display = 'block'; since 'block' is the default
      btnToggle.textContent = 'Hide List';
    } else {
      listContainer.style.display = 'none';
      btnToggle.textContent = 'Show List';
    }
});