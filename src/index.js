import express from 'express';
import { Server as WebSocketServer } from 'socket.io';
import http from 'http';
import { v4 as uuid } from 'uuid';

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

const notes = [];

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('nueva conexión', socket.id);

  socket.on('client:newnote', ({ title, description }) => {
    const new_note = {
      title,
      description,
      id: uuid()
    };
    notes.push(new_note);
    socket.emit('server:newnote', new_note);
  });
  socket.emit('client:rendernotes')
});

server.listen(3000);
console.log('Server on port 3000');
