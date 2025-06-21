const express = require('express');
const bodyParser = require('body-parser');
const stadiumRoutes = require('./routes/stadiumRoutes');
const mongoose = require('mongoose');
const path = require('path');

// Config
const { url } = require('./config/mongoConfig.json');

// DB connection
mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/stadiums', stadiumRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
