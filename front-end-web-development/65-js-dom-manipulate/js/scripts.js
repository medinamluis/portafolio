// 1: Set the text of the <h1> element
const listTitle = document.querySelector('h1');
listTitle.textContent = 'List Title';

// 2: Set the color of the <h1> to a different color
listTitle.style.color = 'firebrick';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const descParag = document.querySelector('.desc');
descParag.innerHTML = `This is <strong>your</strong> list description`;

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>
list.insertAdjacentHTML('beforeend', `
<li><input> New item</li>`
); 
// alternatively, 
/*
const item = document.createElement('li');
item.innerHTML = "<input> New item (opt 2)";
list.appendChild(item);   // 'appendChild' only accepts Node objects
*/

// 6: Change all <input> elements from text fields to checkboxes
const allInputs = document.querySelectorAll('input')  // alternatively, getElementsByTagName('input')
for ( const input of allInputs ) {
  input.type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const btnDel = document.createElement('button');
btnDel.textContent = 'Delete'
console.log( btnDel );

const extraDiv = document.querySelector('.extra');
//extraDiv.insertAdjacentHTML('beforeend', `<br>`);
extraDiv.append(btnDel);   // 'append' accepts Nodes and DOMStrings (basicaly text)

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

const extraP = document.querySelector('div[class="extra"] p');
console.log(extraP);
btnDel.addEventListener('click', () => {
    extraP.remove(); 
});

