const btnCreate = document.getElementById('btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
const taskList = document.querySelector('.list-container ul');
const listItems = taskList.children; // the same as document.getElementsByTagName('li');
                                     // .children returns a live HTMLCollection of element nodes

document.addEventListener('click', (event) => {
  console.log(event);
  console.log(event.target);
});

function attachRemoveButton(li) {
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

console.log(listItems);
for ( const item of listItems ) {
  attachRemoveButton(item);
}

// Attaching events to each list item. 
// Note that a new list item added after the initial loading will not get the event attached
// immediately. It gets triggered when mouseover-ing on the second element (and the last element does not get any event (bug). 
/*
for (let i = 0; i < listItems.length; i++ ) {
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });
}
*/

// A better way of doing this, is to take advantage of bubbling: add the event to the parent of
// the list items. In this case, even elements added to the list will get their event via the parent
/*
taskList.addEventListener('mouseover', (event) => {
	if ( event.target.tagName === 'LI' ) {
		event.target.textContent = event.target.textContent.toUpperCase();
	}
})
*/

// Using a similar code to add functionality to the remove buttons: we want to remove the list element of the corresponding remove button (the parent):
taskList.addEventListener('click', (event) => {
	if ( event.target.tagName === 'BUTTON' ) {
    const button = event.target;
    const li = button.parentNode;
    li.remove();
	}
})

btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');
  if (listContainer.style.display === 'none') { 
    btnToggle.textContent = 'Hide List';
    listContainer.removeAttribute('style');
  } else {
    btnToggle.textContent = 'Show List';                        
    listContainer.style.display = 'none';
  }                         
});

btnCreate.addEventListener('click', () => {
  const input = document.querySelector('.input-main');
  
  // Original (insertAdjacentHTML):
  /*
  const list = document.querySelector('ul');
  list.insertAdjacentHTML( 
    'afterbegin', 
    `<li>${input.value}</i>` 
  );
  */
  // New (with createElement): --- it will also allow us to append individual remove buttons 
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = input.value;
  attachRemoveButton(li);
  ul.appendChild(li);
  
  input.value = '';
});

btnRemove.addEventListener('click', () => {
  const li = document.querySelector('li:last-child');
  li.remove();
});