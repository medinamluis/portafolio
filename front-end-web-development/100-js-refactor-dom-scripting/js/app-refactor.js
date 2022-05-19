document.addEventListener('DOMContentLoaded', () => {  // Allows why this .js to be loaded in the HTML head (instead at the bottom of the body), as it will wait for the DOM to be loaded before executing it. Doing otherwise would throw an error, as the html body elements used here have not been decleared yet at the html head

  // TODO: Add Local Storage
                          
  const form = document.getElementById('registrar');
  const input = form.querySelector('input');
  const mainDiv = document.querySelector('.main');
  const ul = document.getElementById('invitedList');
  
  // We will add a new functionality: a checbox to filter all Confirmed guests
  const div = document.createElement('div');
  const filterLabel = document.createElement('label');
  const filterCheckbox = document.createElement('input');
  
  filterLabel.textContent = "Hide those who haven't responded";
  filterCheckbox.type = 'checkbox';
  div.appendChild(filterLabel);
  div.appendChild(filterCheckbox);
  mainDiv.insertBefore(div, ul);
  
  // Create an li for each guest:
  function createLi(text) {
    // Generic create element function
    function createElement(elementName, property, value) {
      const element = document.createElement(elementName);
      element[property] = value;
      return element
    }
    
    // Generic append element function
    function appendToLI(elementName, property, value) {
      const element = createElement(elementName, property, value) 
      li.appendChild(element);
      return element;
    }
    
    const li = document.createElement('li');
    appendToLI('span', 'textContent', text);  // Span with guest name (to avoid using Text Nodes)
    appendToLI('label', 'textContent', 'Confirmed')  // Label to Confirmed checkbox. // TODO: A label that initially read Confirm, and changes to Confirmed once checked (Requires Text Nodes)
      .appendChild( createElement('input', 'type', 'checkbox') );  // Confirmed checkbox
    appendToLI('button', 'textContent', 'Edit');  // Inital Edit button
    appendToLI('button', 'textContent', 'Remove');  // Initial Remove button
    
    return li;
  }
    
  // Add name in the input field as an item to the list
  // TODO: reject input if it is an empty string and warn the user
  // TODO: reject input if duplicate in the list
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(input);
    const text = input.value;
    input.value = '';  // clear field text after submission
    
    // Create the item:
    const li = createLi(text);
    ul.appendChild(li);
  });
  
  // Add 'responded' css class ('responded') when a checkbox is ticked
  ul.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    //console.log(checked);
    const li = checkbox.parentNode.parentNode;  // to select the corresponing li of the selected checkbox
    
    if (checked) {
      li.className = 'responded';
    } else {
      li.className = '';
    }
  });
  
  // Add functionality to the edit and remove buttons (use again a delegated handler on the parent):
  ul.addEventListener('click', (e) => {
    if (event.target.tagName === 'BUTTON'){
      // We have to be specific on which button
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      const action = button.textContent.toLowerCase();
      const nameActions = {
        remove: () => {
          ul.removeChild(li);
        },
        edit: () => {
          const span = li.firstChild;
          const input = document.createElement('input');
          input.type = 'text';
          input.value = span.textContent;
          li.insertBefore(input, span);
          li.removeChild(span);
          button.textContent = 'Save'
        },
        save: () => {
          const input = li.firstChild;
          const span = document.createElement('span');
          span.textContent = input.value;
          li.insertBefore(span, input);
          li.removeChild(input);
          button.textContent = 'Edit'
        }
      }
      // select and run action in button's name
      nameActions[action]();
    }
  });
  
  // Add functionality to the checkbox filter:
  filterCheckbox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const list = ul.children;
    if (isChecked) {
      for (let i = 0; i < list.length; i++) {
        let li = list[i];
        if (li.className === 'responded') {
          // Show those who have responded
          // TODO: Hide Confirmed checkbox (redundant information)
          li.style.display = '';  // display = '' gives the element its original style
        } else {
          // Show those who have not responded
          li.style.display = 'none';
        }
      }
     } else {   // if not checked
       for (let i = 0; i < list.length; i++) {
         // Show them all
         let li = list[i];
         li.style.display = '';
      }
     }
  });

});
