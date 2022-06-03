const socket = io();

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const notes = document.querySelector('#notes');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submit', title.value, description.value)

  socket.emit('client:newnote', {
    title: title.value,
    description: description.value
  });

  socket.on('server:newnote', data => {
    notes.innerHTML += 'new note'
  });
});
