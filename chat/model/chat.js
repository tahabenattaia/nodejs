const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    pseudo: String,
    message: String,
    date: Date
});

module.exports = mongoose.model('Chat', chatSchema);
