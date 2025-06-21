const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const path = require('path');

// Config
const { url } = require('./config/mongoConfig.json');

// DB connection
mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Chat model
const Chat = require('./model/chat');

// App setup
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => res.render('index.twig'));
app.get('/chat', (req, res) => res.render('chat.twig'));

// Socket.io handling
io.on('connection', (socket) => {
    console.log('User connected');

    // Broadcast new user
    socket.broadcast.emit('notification', 'Un utilisateur a rejoint le chat');

    socket.on('new_user', (pseudo) => {
        socket.pseudo = pseudo;
    });

    socket.on('message', async (data) => {
        const message = new Chat({
            pseudo: socket.pseudo,
            message: data.message,
            date: new Date()
        });
        await message.save();
        io.emit('message', {
            pseudo: socket.pseudo,
            message: data.message,
            date: message.date
        });
    });

    socket.on('typing', () => {
        socket.broadcast.emit('typing', `${socket.pseudo} est en train d’écrire...`);
    });

    socket.on('disconnect', () => {
        io.emit('notification', 'Un utilisateur s\'est déconnecté');
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
