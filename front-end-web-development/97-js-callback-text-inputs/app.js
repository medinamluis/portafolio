const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = event => {
  event.target.className = 'highlight';
};

const blurHandler = event => {   // 'blur' a field loses blur
  event.target.className = '';
};

const elems = [nameInput, messageTextArea];
for (const elem of elems) {
  elem.addEventListener('focus', focusHandler);
  elem.addEventListener('blur', blurHandler);
};