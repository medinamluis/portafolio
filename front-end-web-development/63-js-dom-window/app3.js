const btnCreate = document.getElementById('btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

const headline = document.querySelector('#headline')   
console.log( headline.textContent );

btnCreate.addEventListener('click', () => {
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');

    // Create element: Option 1
    /*
    const item = document.createElement('li');
    item.textContent = input.value;
    console.log(item.value);
    list.append(item);  // there's a .prepend method too. Not supported in IE, use appendChild() instead
    */
    // Create element: Option 2 (faster)
    list.insertAdjacentHTML(
      'beforeend',    // options: beforebegin, afterbegin, beforeend, afterend
      `<li>${input.value}<li>`
    );

    input.value = '';  // clear the text field
 });

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelectors('.list-container');
  
    if ( listContainer.style.display === 'none' ) {
      listContainer.removeAttribute('style'); // here the same as listContainer.style.display = 'block'; since 'block' is the default
      btnToggle.textContent = 'Hide List';
    } else {
      listContainer.style.display = 'none';
      btnToggle.textContent = 'Show List';
    }
});

btnRemove.addEventListener('click', () => {
    const lastItem = document.querySelector('li:last-child');
    lastItem.remove();  // Not supported in IE, use removeChild() instead
});