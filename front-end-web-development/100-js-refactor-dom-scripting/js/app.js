document.addEventListener('DOMContentLoaded', () => {  // Allows why this .js to be loaded in the HTML head (instead at the bottom of the body), as it will wait for the DOM to be loaded before executing it. Doing otherwise would throw an error, as the html body elements used here have not been decleared yet at the html head

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
    const li = document.createElement('li');
    // Instead of adding the text directly to li.textContent, we create an span so we can manipulate it later (edit it, see below):
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);
    console.log(span);
    console.log(li);
    
    // Add a checkbox (and its label) to each item to allow to Confirm the guest
    const checkboxLabel = document.createElement('label');
    checkboxLabel.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkboxLabel.appendChild(checkbox);
    li.appendChild(checkboxLabel);
    
    // Add an an edit/save button to allow changing the guest name
    const editSaveButton = document.createElement('button');
    editSaveButton.textContent = 'Edit';   // Edit initially
    li.appendChild(editSaveButton);
    
    // Also add the option (button) to remove a guest from the list:
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    li.appendChild(removeButton);
    
    return li;
  }
    
  // Add name in the input field as an item to the list
  form.addEventListener('submit', (e) => {
    // the 'submit' form event gets triggered with the click on the submit button or hitting enter
    e.preventDefault(); // to stop the page from reloading after submission
    //console.log(input);
    const text = input.value;
    input.value = '';  // clear field text after submission
    
    // Create the item:
    const li = createLi(text);
    ul.appendChild(li);
  });
  
  // Add event handler to apply the corresponding css class ('responded') when a checkbox is ticked. Since these elements are created dynamically, it's better to add the event by bubbling (and also, DRY this way)
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
      if (button.textContent === 'Remove') {
        ul.removeChild(li);
      } else if (button.textContent === 'Edit') {
        // To edit, remove the span with the guest name and place an input field in its place
        const span = li.firstChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;  // Leave their original guest name as the default text in the input field to allow the user to edit it
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'Save'  // Change the edit button to Sace
      } else if (button.textContent === 'Save') {
        // To save, remove the input field and place a span in its place with the edited guest name
        const input = li.firstChild;
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'Edit'  // Change the edit button to Edit
      }
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
