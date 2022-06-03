const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submit', title.value, description.value)

  saveNote(title.value, description.value);
});
