const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!savedId) {
    saveNote(title.value, description.value);
  } else {
    updateNote(savedId, title.value, description.value)
  }

  title.value = '';
  description.value = '';
});
